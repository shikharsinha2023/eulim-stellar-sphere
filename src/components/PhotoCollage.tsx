import { motion } from "framer-motion";

const placeholders = [
  { span: "md:col-span-2 md:row-span-2", label: "Club Event Photo 1" },
  { span: "", label: "Lab Session" },
  { span: "", label: "Science Fair" },
  { span: "md:col-span-2", label: "Group Photo" },
  { span: "", label: "Workshop" },
  { span: "", label: "Field Trip" },
  { span: "md:col-span-2", label: "Award Ceremony" },
  { span: "", label: "Club Meeting" },
];

export default function PhotoCollage() {
  return (
    <section id="photo-collage" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Moments Captured
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the vibrant life of EULIM Science Club — from lab
            experiments to science fairs and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden group hover:border-primary/40 transition-colors ${item.span}`}
            >
              <p className="text-sm text-muted-foreground text-center px-2">
                📸 {item.label}
              </p>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
