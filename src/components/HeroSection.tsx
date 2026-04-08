import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AtomScene from "./AtomScene";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AtomScene />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          SCHOOL OF SCIENCES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
        >
          Explore. Discover.{" "}
          <span className="text-glow text-primary italic">Innovate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          EULIM Science Club — Where curiosity meets discovery and the next generation of scientists is born.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#about" className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
            Learn More
          </a>
          <a href="#activities" className="rounded-lg border border-border px-8 py-3.5 font-semibold text-foreground hover:bg-muted/50 transition-colors">
            Our Activities
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted-foreground animate-float"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
