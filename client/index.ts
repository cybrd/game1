import { fpsElement, mainFps } from './components/fps';
import { mainTick } from './components/tick';
import { mainMoveElements } from './components/move-elements';
import { mainDetectCollision } from './components/detect-collision';
import { renderer, scene, camera } from './components/renderer';
import { spawner } from './components/spawner';

const app = document.getElementById('app');

app.appendChild(fpsElement);
app.appendChild(renderer.domElement);

async function main() {
  await Promise.all([
    mainFps(),
    mainTick(),
    spawner(scene),
    mainMoveElements(scene)
  ]);

  renderer.render(scene, camera);
  setTimeout(main, 1);
}
main();
