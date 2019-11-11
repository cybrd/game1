import * as THREE from 'three';

sessionStorage.setItem('elements', JSON.stringify({}));

export function addCircle(scene: THREE.Scene, path: THREE.Vector2[][]) {
  const size = Math.random() * 10 + 10;
  const originalColor = Math.random() * 0xffffff;
  const geometry = new THREE.CircleBufferGeometry(size, 30);
  const material = new THREE.MeshBasicMaterial({
    color: originalColor
  });
  const circle = new THREE.Mesh(geometry, material);
  scene.add(circle);

  return {
    id: circle.id,
    data: {
      path,
      size,
      originalColor,
      currentPath: 0,
      currentPoint: 0,
      x: path[0][0].x,
      y: path[0][0].y,
      speed: 5
    }
  };
}
