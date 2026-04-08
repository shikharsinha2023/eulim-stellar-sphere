import { motion } from "framer-motion";
import { useState } from "react";

interface BentoItem {
  label: string;
  span?: string;
  img?: string;
}

interface BentoGalleryProps {
  items: BentoItem[];
  rowHeight?: string;
  columns?: number;
}

function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl border border-border overflow-hidden cursor-pointer group ${item.span || ""}`}
    >
      {/* Background image or placeholder */}
      {item.img ? (
        <motion.img
          src={item.img}
          alt={item.label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          animate={{
            scale: isHovered ? 1.08 : 1,
            filter: isHovered ? "brightness(0.7)" : "brightness(0.85)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-muted/20 border-dashed border border-border" />
      )}

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "inset 0 0 30px hsl(var(--primary) / 0.15), 0 0 20px hsl(var(--primary) / 0.1)"
            : "inset 0 0 0px transparent",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ border: "1px solid transparent" }}
        animate={{
          borderColor: isHovered
            ? "hsl(var(--primary) / 0.4)"
            : "hsl(var(--border))",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Label */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-3 z-10"
        animate={{ y: isHovered ? 0 : 4, opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm font-medium text-foreground/90 drop-shadow-lg">
          {item.img ? "" : "📸 "}{item.label}
        </span>
      </motion.div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/60"
        animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function BentoGallery({
  items,
  rowHeight = "180px",
  columns = 4,
}: BentoGalleryProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 md:gap-4`}
      style={{
        gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
        gridAutoRows: rowHeight,
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .bento-grid-${columns} {
            grid-template-columns: repeat(${columns}, 1fr) !important;
          }
        }
      `}</style>
      <div
        className={`col-span-full grid grid-cols-2 md:grid-cols-${columns} gap-3 md:gap-4 bento-grid-${columns}`}
        style={{ gridAutoRows: rowHeight }}
      >
        {items.map((item, i) => (
          <BentoCard key={item.label + i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
