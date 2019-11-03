export const fpsElement = document.createElement('p');

import FpsWorker from '../workers/fps';
const fpsWorker = new FpsWorker();

export function mainFps() {
  return new Promise(resolve => {
    fpsWorker.postMessage(1);
    fpsWorker.onmessage = event => {
      fpsElement.innerHTML = 'FPS: ' + event.data;
      resolve();
    };
  });
}
