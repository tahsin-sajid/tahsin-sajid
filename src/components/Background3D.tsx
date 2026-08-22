"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles() {
  const ref = useRef<any>(null);

  const sphere = useMemo(() => {
    const positions = new Float32Array(360 * 3);

    for (let i = 0; i < 360; i++) {
    const r = 20 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);

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
          color="#55e8df"
          size={0.045}
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
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
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
        <fog attach="fog" args={["#0B181A", 9, 26]} />
        <Particles />
      </Canvas>
    </div>
  );
}