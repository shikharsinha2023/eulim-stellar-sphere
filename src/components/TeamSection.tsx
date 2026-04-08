import { motion } from "framer-motion";

const team = [
  { name: "President", role: "Club President", placeholder: "Add photo" },
  { name: "Vice President", role: "Vice President", placeholder: "Add photo" },
  { name: "Secretary", role: "General Secretary", placeholder: "Add photo" },
  { name: "Treasurer", role: "Treasurer", placeholder: "Add photo" },
  { name: "Research Lead", role: "Head of Research", placeholder: "Add photo" },
  { name: "Events Lead", role: "Head of Events", placeholder: "Add photo" },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Leadership</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Meet the Team</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="mx-auto mb-4 h-40 w-40 rounded-full border-2 border-dashed border-border bg-muted/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                <span className="text-muted-foreground text-sm">📸 {m.placeholder}</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-primary">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
