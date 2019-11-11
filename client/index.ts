import * as THREE from 'three';

import { fpsElement, mainFps } from './components/fps';
import { mainTick } from './components/tick';
import { mainMoveElements } from './components/move-elements';
import { mainDetectCollision } from './components/detect-collision';
import { renderer, scene, camera } from './components/renderer';
import { spawner } from './components/spawner';
import { showPath } from './components/paths/show-path';
import { getPath } from './components/paths/1';

const app = document.getElementById('app');

app.appendChild(fpsElement);
app.appendChild(renderer.domElement);

const points = getPath();
showPath(scene, points[0]);
showPath(scene, points[1]);

const elements = {
  enemies: {}
};

async function main() {
  await Promise.all([
    spawner(elements, scene, points),
    mainMoveElements(elements, scene)
  ]);

  await Promise.all([
    mainFps(),
    mainTick(),
    mainDetectCollision(elements, scene)
  ]);

  await new Promise(resolve => {
    requestAnimationFrame(resolve);
    renderer.render(scene, camera);
  });

  main();
}
main();
