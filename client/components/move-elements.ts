import * as THREE from 'three';

import MoveElementsWorker from '../workers/move-elements';
const moveElementsWorker = new MoveElementsWorker();

export function mainMoveElements(scene: THREE.Scene) {
  const elements = JSON.parse(sessionStorage.getItem('elements'));

  return new Promise(resolve => {
    moveElementsWorker.postMessage(elements);
    moveElementsWorker.onmessage = event => {
      const newElements = event.data;

      Object.keys(newElements).forEach(key => {
        const element = newElements[key];
        const object = scene.getObjectById(Number(key));
        object.position.x = element.x;
      });

      sessionStorage.setItem('elements', JSON.stringify(newElements));
      resolve();
    };
  });
}
