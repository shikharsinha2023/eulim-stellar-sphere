import { motion } from "framer-motion";
import { Microscope, FileText, Lightbulb, Wrench } from "lucide-react";
import BentoGallery from "./BentoGallery";

const categories = [
  {
    icon: Microscope,
    title: "Discovery Constructs",
    desc: "A group event (2–4 participants) where teams build working models based on Science & Technology. Projects must be original, relevant, and interesting — clearly defining the problem, hypothesis, experiment, data analysis, and conclusion.",
  },
  {
    icon: FileText,
    title: "Insight Showcase",
    desc: "A group event (2–3 participants) where teams present research through A3 portrait posters. Posters should include Introduction, Objectives, Methodology, Results, Discussion, Conclusion, and References with high-quality visuals.",
  },
  {
    icon: Lightbulb,
    title: "Visionary Concepts",
    desc: "An individual or group event (2–3 participants) focused on innovative start-up ideas based on Science & Technology. Present through posters, laptops, or custom websites — creativity is key.",
  },
  {
    icon: Wrench,
    title: "Future Ventures",
    desc: "An individual or group event (2–3 participants) where participants create handmade projects based on Science & Technology. Projects must be original and clearly presented — usage of unfair means leads to disqualification.",
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Flagship Event</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Science Exhibition</h2>
        </motion.div>

        {/* About the exhibition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Join us for an extraordinary celebration of innovation and discovery at the Science Exhibition. This highly anticipated event promises to captivate and inspire with its dynamic lineup of four distinct categories: Discovery Constructs, Insight Showcase, Visionary Concepts, and Future Ventures — highlighting the creativity and ingenuity driving today's advancements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are a student eager to learn, a professional seeking the latest trends, or a curious individual passionate about science, this exhibition is an unmissable opportunity to immerse yourself in the latest advancements and visionary ideas. A day of discovery, inspiration, and connection where the future of science unfolds before your eyes.
            </p>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exhibition Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Exhibition Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {["Exhibition Setup", "Student Projects", "Judging Panel", "Award Ceremony", "Team Photo", "Audience"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative rounded-xl border border-dashed border-border bg-muted/20 flex items-center justify-center overflow-hidden hover:border-primary/30 transition-colors ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <p className="text-sm text-muted-foreground text-center px-2">📸 {label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
