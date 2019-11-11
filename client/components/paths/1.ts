import * as THREE from 'three';

export function getPath() {
  let points1 = [];
  let curve = new THREE.SplineCurve([
    new THREE.Vector2(-250, -100),
    new THREE.Vector2(-50, -100)
  ]);
  points1 = points1.concat(curve.getPoints(10));

  curve = new THREE.SplineCurve([
    new THREE.Vector2(-50, -100),
    new THREE.Vector2(-50, 100)
  ]);
  points1 = points1.concat(curve.getPoints(10));

  curve = new THREE.SplineCurve([
    new THREE.Vector2(-50, 100),
    new THREE.Vector2(-250, 100)
  ]);
  points1 = points1.concat(curve.getPoints(10));

  curve = new THREE.SplineCurve([
    new THREE.Vector2(-250, 100),
    new THREE.Vector2(-250, -100)
  ]);
  points1 = points1.concat(curve.getPoints(10));

  let points2 = [];
  curve = new THREE.SplineCurve([
    new THREE.Vector2(50, -100),
    new THREE.Vector2(250, -100)
  ]);
  points2 = points2.concat(curve.getPoints(10));

  curve = new THREE.SplineCurve([
    new THREE.Vector2(250, -100),
    new THREE.Vector2(250, 100)
  ]);
  points2 = points2.concat(curve.getPoints(10));

  curve = new THREE.SplineCurve([
    new THREE.Vector2(250, 100),
    new THREE.Vector2(50, 100)
  ]);
  points2 = points2.concat(curve.getPoints(10));

  curve = new THREE.SplineCurve([
    new THREE.Vector2(50, 100),
    new THREE.Vector2(50, -100)
  ]);
  points2 = points2.concat(curve.getPoints(10));

  return [points1, points2];
}
