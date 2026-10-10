import * as T from 'three';

// Keep each animated skeleton and its raycast meshes. Only the GPU submission
// is shared: every rigid part gets its own instance matrix after bone updates.
export class CrowdRenderer {
  constructor(scene) {
    this.scene = scene;
    this.buckets = new Map();
    this.bindings = new WeakMap();
  }
  register(root, kind) {
    const parts = [];
    root.traverse(part => {
      if (part.isMesh && part !== root.userData.cape) parts.push(part);
    });
    const bindings = parts.map((part, index) => {
      const key = `${kind}:${index}`;
      let bucket = this.buckets.get(key);
      if (!bucket) {
        const geometry = part.geometry.clone();
        geometry.userData.owned3d = true;
        geometry.userData.crowdShared = true;
        bucket = { geometry, material: part.material, count: 0, capacity: 0, mesh: null };
        this.buckets.set(key, bucket);
        this.grow(bucket, 8);
      }
      if (part.geometry.userData.owned3d && !part.geometry.userData.crowdShared && !part.geometry.userData.templateShared) part.geometry.dispose();
      part.geometry = bucket.geometry;
      // Raycaster still intersects hidden rigid parts; the instance group is
      // deliberately excluded from gameplay picking.
      part.visible = false;
      part.userData.crowdPick = true;
      return { part, bucket };
    });
    this.bindings.set(root, bindings);
    root.userData.crowd = true;
  }
  grow(bucket, capacity) {
    const previous = bucket.mesh;
    const batch = new T.InstancedMesh(bucket.geometry, bucket.material, capacity);
    if (previous) {
      batch.instanceMatrix.array.set(previous.instanceMatrix.array);
      this.scene.remove(previous);
      previous.dispose();
    }
    batch.instanceMatrix.setUsage(T.DynamicDrawUsage);
    batch.castShadow = batch.receiveShadow = true;
    batch.frustumCulled = false;
    batch.raycast = () => {};
    batch.count = 0;
    this.scene.add(batch);
    bucket.mesh = batch;
    bucket.capacity = capacity;
  }
  update(roots) {
    for (const bucket of this.buckets.values()) bucket.count = 0;
    for (const root of roots) {
      if (!root.visible) continue;
      const bindings = this.bindings.get(root);
      if (!bindings) continue;
      root.updateMatrixWorld(true);
      for (const { part, bucket } of bindings) {
        if (bucket.count === bucket.capacity) this.grow(bucket, bucket.capacity * 2);
        bucket.mesh.setMatrixAt(bucket.count++, part.matrixWorld);
      }
    }
    for (const bucket of this.buckets.values()) {
      bucket.mesh.count = bucket.count;
      bucket.mesh.visible = bucket.count > 0;
      bucket.mesh.instanceMatrix.needsUpdate = true;
    }
  }
  reset() {
    for (const bucket of this.buckets.values()) {
      this.scene.remove(bucket.mesh);
      bucket.mesh.dispose();
      bucket.geometry.dispose();
    }
    this.buckets.clear();
    this.bindings = new WeakMap();
  }
}
