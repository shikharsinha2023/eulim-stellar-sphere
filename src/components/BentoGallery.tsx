import { motion } from "framer-motion";
import { useState } from "react";

export interface BentoItem {
  label: string;
  span?: string;
  img?: string;
}

function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-xl border border-border overflow-hidden cursor-pointer ${item.span || ""}`}
    >
      {item.img ? (
        <motion.img
          src={item.img}
          alt={item.label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          animate={{
            scale: hovered ? 1.08 : 1,
            filter: hovered ? "brightness(0.65)" : "brightness(0.8)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-muted/15 flex items-center justify-center">
          <span className="text-2xl opacity-40">📸</span>
        </div>
      )}

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Primary glow border */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? "inset 0 0 25px hsl(var(--primary) / 0.12), 0 4px 20px hsl(var(--primary) / 0.08)"
            : "inset 0 0 0px transparent, 0 0 0px transparent",
          border: hovered ? "1px solid hsl(var(--primary) / 0.4)" : "1px solid transparent",
        }}
        transition={{ duration: 0.35 }}
      />

      {/* Label */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-3 z-10"
        animate={{ y: hovered ? 0 : 6, opacity: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xs md:text-sm font-medium text-foreground drop-shadow-lg">
          {item.label}
        </span>
      </motion.div>

      {/* Dot accent */}
      <motion.div
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary"
        animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 0.8 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}

export default function BentoGallery({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
      {items.map((item, i) => (
        <BentoCard key={`${item.label}-${i}`} item={item} index={i} />
      ))}
    </div>
  );
}
