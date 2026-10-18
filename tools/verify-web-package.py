"""Validate the final ZIP against the shipping manifest, without extracting it."""
from pathlib import Path
import hashlib
import json
import os
import zipfile

root = Path(__file__).resolve().parents[1]
web = root / 'dist' / 'web'
archive_path = root / 'dist' / 'hoguk-web.zip'
manifest_bytes = (web / 'release-manifest.json').read_bytes()
manifest = json.loads(manifest_bytes)
sha = lambda b: hashlib.sha256(b).hexdigest()
prefix = 'hoguk-web/'
expected = {prefix + 'release-manifest.json'} | {prefix + f['path'] for f in manifest['files']}
with zipfile.ZipFile(archive_path) as archive:
    assert len(archive.namelist()) == len(expected)
    assert set(archive.namelist()) == expected
    assert archive.read(prefix + 'release-manifest.json') == manifest_bytes
    for entry in manifest['files']:
        rel = entry['path']
        path = (web / rel).resolve()
        assert path.is_relative_to(web.resolve())
        assert '/source/' not in rel and not rel.startswith(('dev/', '.git/', 'node_modules/'))
        data = path.read_bytes()
        assert len(data) == entry['bytes'] and sha(data) == entry['sha256']
        assert archive.read(prefix + rel) == data
        if rel.endswith(('.webp', '.png', '.jpg')):
            assert data == (root / rel).read_bytes()
    for family in ('fire', 'flood', 'heal'):
        assert prefix + f'assets/3d/fixed/combo-{family}-v1.webp' in expected

report = {
    'passed': True,
    'archive': 'dist/hoguk-web.zip',
    'archiveBytes': archive_path.stat().st_size,
    'archiveSha256': sha(archive_path.read_bytes()),
    'manifestSha256': sha(manifest_bytes),
    'filesIncludingManifest': len(expected),
    'manifestFiles': len(manifest['files']),
    'manifestFileBytes': sum(f['bytes'] for f in manifest['files']),
    'allFileHashesAndZipBytesMatch': True,
    'artFiles': sum(f['path'].endswith(('.webp', '.png', '.jpg')) for f in manifest['files']),
    'artIsByteIdentical': True,
    'sourceAndDevFilesExcluded': True,
}
report_dir = root / os.environ.get('HOGUK_REPORT_DIR', 'docs')
report_dir.mkdir(parents=True, exist_ok=True)
(report_dir / 'ZIP_PACKAGE_VALIDATION.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
print(json.dumps(report))
