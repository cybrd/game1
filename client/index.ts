const app = document.getElementById('app');

const fps = document.createElement('p');
app.appendChild(fps);
fps.innerHTML = 'FPS';

const ticker1 = document.createElement('p');
app.appendChild(ticker1);
ticker1.innerHTML = 'Ticker 1';

const ticker2 = document.createElement('p');
app.appendChild(ticker2);
ticker2.innerHTML = 'Ticker 2';

import CounterWorker from './workers/Counter';
const counterWorker1 = new CounterWorker();
const counterWorker2 = new CounterWorker();

import FpsWorker from './workers/Fps';
const fpsWorker = new FpsWorker();

import TickWorker from './workers/Tick';
const tickWorker = new TickWorker();

async function main() {
  await Promise.all([mainCounter1(), mainCounter2(), mainFps(), mainTick()]);

  setTimeout(main, 1);
}
main();

function mainCounter1() {
  return new Promise(resolve => {
    counterWorker1.postMessage(1);
    counterWorker1.onmessage = event => {
      ticker1.innerHTML = 'Ticker 1: ' + event.data;
      resolve();
    };
  });
}

function mainCounter2() {
  return new Promise(resolve => {
    counterWorker2.postMessage(1);
    counterWorker2.onmessage = event => {
      ticker2.innerHTML = 'Ticker 2: ' + event.data;
      resolve();
    };
  });
}

function mainFps() {
  return new Promise(resolve => {
    fpsWorker.postMessage(1);
    fpsWorker.onmessage = event => {
      fps.innerHTML = 'FPS: ' + event.data;
      resolve();
    };
  });
}

function mainTick() {
  return new Promise(resolve => {
    tickWorker.postMessage(1);
    tickWorker.onmessage = () => resolve();
  });
}
