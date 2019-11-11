import * as THREE from 'three';

export function showPath(scene: THREE.Scene, points) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
  const splineObject = new THREE.Line(geometry, material);
  scene.add(splineObject);
}
