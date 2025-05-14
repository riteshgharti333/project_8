import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    // 1. Initialize Lenis with performance-optimized settings
    const lenis = new Lenis({
      lerp: 0.08,            // Faster response (default 0.1)
      duration: 1.2,          // Optimal scroll duration
      smoothTouch: false,     // Disable smooth on touch (better performance)
      touchMultiplier: 1.2,   // Slightly faster touch response
      wheelMultiplier: 1.1,   // Slightly faster wheel scroll
    });

    // 2. Super-optimized animation frame handler
    let lastTime = 0;
    const raf = (time) => {
      // Throttle to 60fps max
      if (time - lastTime >= 16) {  // ~60fps (1000ms/60 ≈ 16ms)
        lenis.raf(time);
        lastTime = time;
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 3. Critical performance optimizations
    const handleWheel = (e) => {
      // Disable during momentum scroll
      if (e.deltaY > 50 || e.deltaY < -50) {
        lenis.stop();
      }
    };

    // 4. Cleanup everything perfectly
    return () => {
      lenis.destroy();
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null;
};

export default SmoothScroll;