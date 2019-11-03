import * as THREE from 'three';

const width = 800;
const height = 400;
export const scene = new THREE.Scene();
export const camera = new THREE.OrthographicCamera(
  width / -2,
  width / 2,
  height / 2,
  height / -2
);
camera.position.z = 1;

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 400);
