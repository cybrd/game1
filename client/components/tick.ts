import TickWorker from '../workers/tick';
const tickWorker = new TickWorker();

export function mainTick() {
  return new Promise(resolve => {
    tickWorker.postMessage(1);
    tickWorker.onmessage = () => resolve();
  });
}
