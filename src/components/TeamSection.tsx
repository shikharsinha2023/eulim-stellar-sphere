import { motion } from "framer-motion";
import { Crown, Shield, Star, Sparkles } from "lucide-react";

const team = [
  { name: "Shayan Azmi", role: "Architect of Inquiry", tag: "Leader", icon: Crown },
  { name: "Aryan S. Nair", role: "Catalyst Prime", tag: "Co-Leader", icon: Shield },
  { name: "Aryan Manna", role: "The Founding Nucleus", tag: "Ex-Leader | Mentor", icon: Star },
  { name: "Prashant Parwani", role: "The Guiding Proton", tag: "Ex Co-Leader | Mentor", icon: Star },
  { name: "Aryan Garg", role: "Signal Amplifier", tag: "PR & Sponsorship Head", icon: Sparkles },
  { name: "MD. Saif", role: "Field Orchestrator", tag: "Hospitality Head", icon: Sparkles },
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
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">The Neural Network</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Meet the Catalysts</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="mx-auto mb-4 h-40 w-40 rounded-full border-2 border-dashed border-border bg-muted/20 flex items-center justify-center group-hover:border-primary/40 transition-colors relative overflow-hidden">
                <span className="text-muted-foreground text-sm">📸 Add photo</span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/5"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <m.icon size={14} className="text-primary" />
                <h3 className="font-display text-lg font-semibold">{m.name}</h3>
              </div>
              <p className="text-sm text-primary font-medium">{m.role}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{m.tag}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
