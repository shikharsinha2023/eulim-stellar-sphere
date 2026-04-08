import { motion } from "framer-motion";
import { Microscope, Atom, FlaskConical, Telescope } from "lucide-react";

const features = [
  { icon: Microscope, title: "Research & Discovery", desc: "Hands-on research projects pushing the boundaries of undergraduate science." },
  { icon: Atom, title: "Physics & Chemistry", desc: "Exploring the fundamental laws that govern our universe." },
  { icon: FlaskConical, title: "Lab Experiments", desc: "Practical laboratory sessions that bring theory to life." },
  { icon: Telescope, title: "Astronomy Nights", desc: "Stargazing events and astrophysics discussions under the night sky." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Who We Are</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            EULIM Science Club is the premier student-led science organization at the School of Sciences, 
            fostering a community of curious minds passionate about scientific exploration and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:card-glow transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-dashed border-border bg-muted/30 h-80 flex items-center justify-center"
        >
          <p className="text-muted-foreground">📸 Club group photo — add your image here</p>
        </motion.div>
      </div>
    </section>
  );
}
