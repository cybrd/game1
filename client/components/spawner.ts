import * as THREE from 'three';

import { create } from './create';

let spawnTick = 0;

export function spawner(scene: THREE.Scene) {
  if (spawnTick % 21 === 0) {
    create(scene);
  }
  spawnTick++;
}
