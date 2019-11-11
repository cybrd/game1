const detectCollisionWorker: Worker = self as any;

detectCollisionWorker.onmessage = async event => {
  const elements = event.data;

  Object.keys(elements).forEach(key => {
    const element = elements[key];

    element.collided = false;

    Object.keys(elements).forEach(key2 => {
      if (key === key2) {
        return;
      }

      const element2 = elements[key2];

      if (
        Math.pow(element.x - element2.x, 2) +
          Math.pow(element.y - element2.y, 2) <=
        Math.pow(element.size + element2.size, 2)
      ) {
        element.collided = true;
      }
    });
  });

  detectCollisionWorker.postMessage(elements);
};
