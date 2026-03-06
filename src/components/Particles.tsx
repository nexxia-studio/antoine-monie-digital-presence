import { useEffect, useRef } from "react";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.animationDuration = (8 + Math.random() * 12) + "s";
      p.style.animationDelay = Math.random() * 5 + "s";
      p.style.width = (1 + Math.random() * 2) + "px";
      p.style.height = p.style.width;
      container.appendChild(p);
      setTimeout(() => p.remove(), 20000);
    };

    const interval = setInterval(createParticle, 300);
    // Create initial batch
    for (let i = 0; i < 30; i++) createParticle();

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
