const moveElementsWorker: Worker = self as any;

moveElementsWorker.onmessage = event => {
  const elements = event.data;

  Object.keys(elements).forEach(key => {
    elements[key].x += 1;
  });

  moveElementsWorker.postMessage(elements);
};
