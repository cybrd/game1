import * as THREE from 'three';

import DetectCollisionWorker from '../workers/detect-collision';
const detectCollisionWorker = new DetectCollisionWorker();

export function mainDetectCollision(scene: THREE.Scene) {
  const elements = JSON.parse(sessionStorage.getItem('elements'));

  return new Promise(resolve => {
    if (Object.keys(elements).length) {
      detectCollisionWorker.postMessage(elements);
    } else {
      resolve();
    }

    detectCollisionWorker.onmessage = event => {
      const newElements = event.data;

      Object.keys(newElements).forEach(key => {
        const element = newElements[key];
        const object: any = scene.getObjectById(Number(key));

        if (element.collided) {
          object.material.color.setHex(0xff0000);
        } else {
          object.material.color.setHex(0xffff00);
        }
      });

      sessionStorage.setItem('elements', JSON.stringify(newElements));
      resolve();
    };
  });
}
