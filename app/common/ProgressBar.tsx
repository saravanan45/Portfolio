import { useEffect, useState } from "react";

function getScrollPercent() {
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return 0;
  return Math.min((window.scrollY / docHeight) * 100, 100);
}

const ProgressBar = () => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    function updateProgress() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setCurrentProgress(getScrollPercent());
      });
    }

    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div
      className="w-full fixed top-0 left-0 z-100 h-1 progress-bar"
      style={{
        transform: `scaleX(${currentProgress / 100})`,
        transformOrigin: "center",
      }}
    />
  );
};

export default ProgressBar;
