"use client";

import { PropsWithChildren, useRef } from "react";

type Interactive3DProps = PropsWithChildren<{
  className?: string;
  intensity?: number;
  style?: React.CSSProperties;
}>;

export default function Interactive3D({ children, className = "", intensity = 8, style }: Interactive3DProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    element.style.transform = `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(8px)`;
  };

  const reset = () => {
    if (elementRef.current) elementRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div ref={elementRef} className={`interactive-3d ${className}`} style={style} onMouseMove={handleMove} onMouseLeave={reset}>
      {children}
    </div>
  );
}