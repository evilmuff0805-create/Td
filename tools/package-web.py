"""Package only manifest-owned release files; standard Python, no extra libraries."""
from pathlib import Path
import json
import zipfile

root = Path(__file__).resolve().parents[1]
web = root / 'dist' / 'web'
manifest = json.loads((web / 'release-manifest.json').read_text(encoding='utf-8'))
target = root / 'dist' / 'hoguk-web.zip'
temporary = target.with_suffix('.zip.tmp')
with zipfile.ZipFile(temporary, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for rel in ['release-manifest.json'] + [file['path'] for file in manifest['files']]:
        source = (web / rel).resolve()
        if not source.is_relative_to(web.resolve()):
            raise ValueError('Invalid release path')
        archive.write(source, 'hoguk-web/' + rel)
temporary.replace(target)
print(json.dumps({'archive': str(target), 'bytes': target.stat().st_size, 'files': len(manifest['files']) + 1}))
