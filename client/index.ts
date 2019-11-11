import * as THREE from 'three';
import { fpsElement, mainFps } from './components/fps';
import { mainTick } from './components/tick';
import { mainMoveElements } from './components/move-elements';
import { mainDetectCollision } from './components/detect-collision';
import { renderer, scene, camera } from './components/renderer';
import { spawner } from './components/spawner';

const app = document.getElementById('app');

app.appendChild(fpsElement);
app.appendChild(renderer.domElement);

let points = [];
let curve = new THREE.SplineCurve([
  new THREE.Vector2(-100, -100),
  new THREE.Vector2(100, -100)
]);
points = points.concat(curve.getPoints(10));

curve = new THREE.SplineCurve([
  new THREE.Vector2(100, -100),
  new THREE.Vector2(100, 100)
]);
points = points.concat(curve.getPoints(10));

curve = new THREE.SplineCurve([
  new THREE.Vector2(100, 100),
  new THREE.Vector2(-100, 100)
]);
points = points.concat(curve.getPoints(10));

curve = new THREE.SplineCurve([
  new THREE.Vector2(-100, 100),
  new THREE.Vector2(-100, -100)
]);
points = points.concat(curve.getPoints(10));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

var splineObject = new THREE.Line(geometry, material);
scene.add(splineObject);

const elements = {
  enemies: {}
};

async function main() {
  await Promise.all([
    mainFps(),
    mainTick(),
    spawner(elements, scene, points),
    mainMoveElements(elements, scene)
  ]);

  await Promise.all([mainDetectCollision(elements, scene)]);

  await new Promise(resolve => {
    requestAnimationFrame(resolve);
    renderer.render(scene, camera);
  });

  main();
}
main();
