import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-primary/30"
        style={{
          x,
          y,
          width: 40,
          height: 40,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner nucleus dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary/60"
        style={{
          x,
          y,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.2)",
        }}
      />
      {/* Orbiting electron 1 */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="relative h-0 w-0 animate-[orbit_3s_linear_infinite]">
          <div className="absolute h-3 w-3 rounded-full bg-secondary/70" style={{ top: -18, left: -1.5, boxShadow: "0 0 8px hsl(var(--secondary) / 0.6)" }} />
        </div>
      </motion.div>
      {/* Orbiting electron 2 */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="relative h-0 w-0 animate-[orbit_4s_linear_infinite_reverse]">
          <div className="absolute h-2 w-2 rounded-full bg-accent/70" style={{ top: 14, left: -1, boxShadow: "0 0 8px hsl(var(--accent) / 0.6)" }} />
        </div>
      </motion.div>
    </>
  );
}
