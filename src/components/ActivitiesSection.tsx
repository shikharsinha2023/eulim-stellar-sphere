import { motion } from "framer-motion";
import { Beaker, BookOpen, Users, Trophy, Lightbulb, Globe } from "lucide-react";

const activities = [
  { icon: Beaker, title: "Lab Sessions", desc: "Weekly hands-on experiments across physics, chemistry, and biology." },
  { icon: BookOpen, title: "Journal Club", desc: "Bi-weekly discussions on groundbreaking scientific papers." },
  { icon: Users, title: "Mentorship Program", desc: "Senior students guide juniors through research methodologies." },
  { icon: Trophy, title: "Science Competitions", desc: "Participate in national and international science olympiads." },
  { icon: Lightbulb, title: "Innovation Hackathons", desc: "48-hour sprints to solve real-world problems with science." },
  { icon: Globe, title: "Guest Lectures", desc: "Talks from industry professionals and renowned scientists." },
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
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Our Activities</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From lab work to hackathons, we offer a diverse range of activities to fuel your scientific passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <a.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{a.title}</h3>
                <p className="text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
