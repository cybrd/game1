import * as THREE from 'three';

import { addCircle } from './geometries/circle';

let spawnTick = 0;

export function spawner(scene: THREE.Scene, points: THREE.Vector2[]) {
  if (spawnTick % 25 === 0) {
    addCircle(scene, points);
  }
  spawnTick++;
}
