import * as THREE from 'three';

import { addCircle } from './geometries/circle';

let spawnTick = 0;

export function spawner(
  elements,
  scene: THREE.Scene,
  points: THREE.Vector2[][]
) {
  if (spawnTick % 15 === 0) {
    const { id, data } = addCircle(scene, points);
    elements.enemies[id] = data;
  }
  spawnTick++;
}
