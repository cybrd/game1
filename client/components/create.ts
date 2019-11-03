import * as THREE from 'three';

sessionStorage.setItem('elements', JSON.stringify({}));

export function create(scene: THREE.Scene) {
  const geometry = new THREE.CircleBufferGeometry(10, 30);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const elements = JSON.parse(sessionStorage.getItem('elements'));
  elements[cube.id] = cube.position;
  sessionStorage.setItem('elements', JSON.stringify(elements));
}
