import * as THREE from 'three';

sessionStorage.setItem('elements', JSON.stringify({}));

export function addCircle(scene: THREE.Scene, path: THREE.Vector2[]) {
  const size = Math.round(Math.random() * 10) + 10;
  const geometry = new THREE.CircleBufferGeometry(size, 30);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const elements = JSON.parse(sessionStorage.getItem('elements'));
  elements[cube.id] = {
    path,
    size,
    currentPoint: 0,
    speed: 2,
    x: path[0].x,
    y: path[0].y
  };
  sessionStorage.setItem('elements', JSON.stringify(elements));
}
