const counterWorker: Worker = self as any;

counterWorker.onmessage = event => {
  setTimeout(() => {
    counterWorker.postMessage(Math.random());
  }, event.data.delay);
};
