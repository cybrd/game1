const tickWorker: Worker = self as any;

let lastTick = new Date().getTime();

tickWorker.onmessage = async () => {
  while (lastTick + 1 > new Date().getTime()) {
    await new Promise(resolve => setTimeout(resolve, 1));
  }

  lastTick = new Date().getTime();

  tickWorker.postMessage(1);
};
