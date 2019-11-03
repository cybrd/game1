const detectCollisionWorker: Worker = self as any;

detectCollisionWorker.onmessage = async event => {
  console.log(event.data);
  // if (
  //   Math.pow(cube2.position.x - cube1.position.x, 2) +
  //     Math.pow(cube1.position.y - cube2.position.y, 2) <=
  //   Math.pow(50 + 50, 2)
  // ) {
  //   console.log('yep');
  // }

  detectCollisionWorker.postMessage(1);
};
