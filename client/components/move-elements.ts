import * as THREE from 'three';

import MoveElementsWorker from '../workers/move-elements';
const moveElementsWorker = new MoveElementsWorker();

export function mainMoveElements(elements, scene: THREE.Scene) {
  return new Promise(resolve => {
    if (Object.keys(elements.enemies).length) {
      moveElementsWorker.postMessage(elements);
    } else {
      resolve(elements);
    }

    moveElementsWorker.onmessage = event => {
      Object.assign(elements, event.data);

      Object.keys(elements.enemies).forEach(key => {
        const element = elements.enemies[key];
        const object = scene.getObjectById(Number(key));

        if (element.remove) {
          scene.remove(object);
          delete elements.enemies[key];
          return;
        }

        object.position.x = element.x;
        object.position.y = element.y;
      });

      resolve(elements);
    };
  });
}
