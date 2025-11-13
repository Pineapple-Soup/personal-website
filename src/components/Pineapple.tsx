"use client";

import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

function InitializeScene(container: HTMLDivElement) {
  const dimensions = {
    width: container.clientWidth,
    height: container.clientHeight,
  };
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    dimensions.width / dimensions.height,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(dimensions.width, dimensions.height);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  return { scene, camera, renderer, dimensions };
}

function createPineappleBody(
  radius: number,
  length: number,
  capSegments: number,
  radSegments: number,
  color: number,
  outline: boolean,
  outlineColor?: number
) {
  const baseGeometry = new THREE.CapsuleGeometry(
    radius,
    length,
    capSegments,
    radSegments
  );
  const baseMaterial = new THREE.MeshToonMaterial({ color: color });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  if (outline) {
    const baseEdges = new THREE.EdgesGeometry(baseGeometry);
    const baseEdgeMaterial = new THREE.LineBasicMaterial({
      color: outlineColor,
    });
    const baseOutline = new THREE.LineSegments(baseEdges, baseEdgeMaterial);
    base.add(baseOutline);
  }

  return base;
}

function createLeaf(
  radius: number,
  height: number,
  radialSegments: number,
  color: number,
  outline: boolean,
  outlineColor?: number
) {
  const leafGeometry = new THREE.ConeGeometry(radius, height, radialSegments);
  const leafMaterial = new THREE.MeshToonMaterial({ color: color });
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);

  if (outline) {
    const leafEdges = new THREE.EdgesGeometry(leafGeometry);
    const leafEdgeMaterial = new THREE.LineBasicMaterial({
      color: outlineColor,
    });
    const leafOutline = new THREE.LineSegments(leafEdges, leafEdgeMaterial);
    leaf.add(leafOutline);
  }

  return leaf;
}

function createCrown(
  height: number,
  radius: number,
  leafCount: number,
  color: number,
  outline: boolean,
  outlineColor?: number
) {
  const crown = new THREE.Group();

  for (let i = 0; i < leafCount; i++) {
    const leaf = createLeaf(
      height - radius,
      height - 4,
      6,
      color,
      outline,
      outlineColor
    );

    const angle = (i / leafCount) * Math.PI * 2;
    leaf.position.set(
      (Math.cos(angle) * radius) / 2,
      2,
      (Math.sin(angle) * radius) / 2
    );
    leaf.lookAt(0, 12, 0);

    crown.add(leaf);
  }

  for (let i = 0; i < leafCount; i++) {
    const leaf = createLeaf(
      height - radius,
      height,
      6,
      color,
      outline,
      outlineColor
    );

    const angle = ((i + 0.5) / leafCount) * Math.PI * 2;
    leaf.position.set(
      (Math.cos(angle) * radius) / 4,
      4,
      (Math.sin(angle) * radius) / 4
    );
    leaf.lookAt(0, 6, 0);

    crown.add(leaf);
  }

  return crown;
}

export default function Pineapple() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { scene, camera, renderer } = InitializeScene(container);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    const light = new THREE.AmbientLight(0xffffff, 5);
    light.position.set(0, 0, 1);
    scene.add(light);

    const height = 10;
    const radius = 8;
    const pineapple = createPineappleBody(
      radius,
      height - radius,
      2,
      18,
      0xe09d29,
      true,
      0x000000
    );
    const crown = createCrown(height, radius, 8, 0x006400, true, 0x000000);
    crown.position.set(0, radius, 0);
    pineapple.position.set(0, -5, 0);
    pineapple.lookAt(-20, 0, 0);
    pineapple.add(crown);
    scene.add(pineapple);

    camera.position.z = 25;

    container.addEventListener("mouseenter", () => {
      container.style.cursor = "grab";
    });

    container.addEventListener("mousedown", () => {
      controls.autoRotate = false;
      container.style.cursor = "grabbing";
    });

    container.addEventListener("mouseup", () => {
      controls.autoRotate = true;
      container.style.cursor = "grab";
    });

    window.addEventListener("resize", () => {
      const dimensions = {
        width: container.clientWidth,
        height: container.clientHeight,
      };

      renderer.setSize(dimensions.width, dimensions.height);
      camera.aspect = dimensions.width / dimensions.height;
      camera.updateProjectionMatrix();
    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className='w-full h-full' />;
}
