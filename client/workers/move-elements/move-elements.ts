import * as THREE from 'three';

const moveElementsWorker: Worker = self as any;

moveElementsWorker.onmessage = event => {
  const elements = event.data;

  Object.keys(elements.enemies).forEach(key => {
    const element = elements.enemies[key];

    if (!element.path[element.currentPath][element.currentPoint + 1]) {
      if (element.path[element.currentPath + 1]) {
        element.currentPoint = 0;
        element.currentPath++;

        element.x = element.path[element.currentPath][element.currentPoint].x;
        element.y = element.path[element.currentPath][element.currentPoint].y;
        return;
      } else {
        element.remove = true;
        return;
      }
    }

    let v1 = new THREE.Vector2(element.x, element.y);
    let v2 = new THREE.Vector2(
      element.path[element.currentPath][element.currentPoint + 1].x,
      element.path[element.currentPath][element.currentPoint + 1].y
    );
    let speed = element.speed;

    while (speed > v2.distanceTo(v1)) {
      if (!element.path[element.currentPath][element.currentPoint + 1]) {
        if (element.path[element.currentPath + 1]) {
          element.currentPoint = 0;
          element.currentPath++;

          element.x = element.path[element.currentPath][element.currentPoint].x;
          element.y = element.path[element.currentPath][element.currentPoint].y;
          return;
        } else {
          element.remove = true;
          return;
        }
      }

      speed -= v2.distanceTo(v1);

      v1 = new THREE.Vector2(
        element.path[element.currentPath][element.currentPoint].x,
        element.path[element.currentPath][element.currentPoint].y
      );
      v2 = new THREE.Vector2(
        element.path[element.currentPath][element.currentPoint + 1].x,
        element.path[element.currentPath][element.currentPoint + 1].y
      );
      element.currentPoint++;
    }

    const direction = new THREE.Vector2();
    direction.subVectors(v2, v1).normalize();

    const vector = direction.multiplyScalar(speed);
    element.x += vector.x;
    element.y += vector.y;
  });

  moveElementsWorker.postMessage(elements);
};
