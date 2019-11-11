const detectCollisionWorker: Worker = self as any;

detectCollisionWorker.onmessage = async event => {
  const elements = event.data;

  Object.keys(elements.enemies).forEach(key => {
    const element = elements.enemies[key];

    element.collided = false;

    Object.keys(elements.enemies).forEach(key2 => {
      if (key === key2) {
        return;
      }

      const element2 = elements.enemies[key2];

      if (
        Math.pow(element.x - element2.x, 2) +
          Math.pow(element.y - element2.y, 2) <=
        Math.pow(element.size + element2.size, 2)
      ) {
        element.collided = true;
        return;
      }
    });
  });

  detectCollisionWorker.postMessage(elements);
};
