import DetectCollisionWorker from '../workers/detect-collision';
const detectCollisionWorker = new DetectCollisionWorker();

export function mainDetectCollision(cube) {
  return new Promise(resolve => {
    detectCollisionWorker.postMessage(cube);
    detectCollisionWorker.onmessage = () => resolve();
  });
}
