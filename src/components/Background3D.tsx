"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles() {
  const ref = useRef<any>(null);

  const sphere = new Float32Array(500 * 3);

  for (let i = 0; i < 500; i++) {
    const r = 20 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    sphere[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    sphere[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    sphere[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#00F5EF"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");

    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    return !!gl;
  } catch {
    return false;
  }
}

export default function Background3D() {
  const [webGLAvailable, setWebGLAvailable] = useState(false);

  useEffect(() => {
    setWebGLAvailable(canUseWebGL());
  }, []);

  if (!webGLAvailable) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: "#0B181A",
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15] }}
        fallback={
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#0B181A",
            }}
          />
        }
      >
        <Particles />
      </Canvas>
    </div>
  );
}