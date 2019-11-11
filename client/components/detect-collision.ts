import * as THREE from 'three';

import DetectCollisionWorker from '../workers/detect-collision';
const detectCollisionWorker = new DetectCollisionWorker();

export function mainDetectCollision(elements, scene: THREE.Scene) {
  return new Promise(resolve => {
    if (Object.keys(elements.enemies).length) {
      detectCollisionWorker.postMessage(elements);
    } else {
      resolve(elements);
    }

    detectCollisionWorker.onmessage = event => {
      Object.assign(elements, event.data);

      Object.keys(elements.enemies).forEach(key => {
        const element = elements.enemies[key];
        const object: any = scene.getObjectById(Number(key));

        if (element.collided) {
          object.material.color.setHex(0xff0000);
        } else {
          object.material.color.setHex(0xffff00);
        }
      });

      resolve(elements);
    };
  });
}
