const fpsWorker: Worker = self as any;

const fpsTimes: number[] = [];

fpsWorker.onmessage = () => {
  const now = new Date().getTime();

  while (fpsTimes.length && now - 1000 > fpsTimes[0]) {
    fpsTimes.shift();
  }

  fpsTimes.push(now);

  fpsWorker.postMessage(fpsTimes.length);
};
