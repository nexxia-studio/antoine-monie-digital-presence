import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(190 100% 50%), hsl(245 100% 69%))",
        }}
      />
    </div>
  );
}
