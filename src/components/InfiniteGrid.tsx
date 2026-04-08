import { motion } from "framer-motion";

export default function InfiniteGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Subtle dot intersections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.12) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
}
