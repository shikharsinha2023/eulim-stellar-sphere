import { motion } from "framer-motion";
import { BookOpen, Award, Globe, Users } from "lucide-react";

const highlights = [
  { icon: BookOpen, title: "Founded in 1969", desc: "Established as Christ College, pioneering innovative curricula and academic discipline in Indian higher education." },
  { icon: Award, title: "NAAC A+ Accredited", desc: "One of the first institutions in India accredited by NAAC in 1998, currently holding the prestigious A+ grade." },
  { icon: Globe, title: "Multi-Campus University", desc: "Spanning campuses across Bangalore, Pune Lavasa, and Delhi NCR with 40,000+ students from 60+ countries." },
  { icon: Users, title: "Deemed to be University", desc: "Conferred Deemed to be University status in 2008 by the Ministry of Human Resource Development, Government of India." },
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
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About the University</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">CHRIST (Deemed to be University)</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg">
            Excellence and Service
          </p>
        </motion.div>

        {/* Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 space-y-6"
        >
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-semibold mb-4 text-primary">The Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              CHRIST (Deemed to be University) was born out of the educational vision of <strong className="text-foreground">St Kuriakose Elias Chavara</strong>, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, <strong className="text-foreground">Carmelites of Mary Immaculate (CMI)</strong>, in 1831 which administers CHRIST (Deemed to be University).
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-semibold mb-4 text-primary">The Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CHRIST (Deemed to be University) was established as 'Christ College' in 1969. It undertook path-breaking initiatives in Indian higher education with the introduction of innovative and modern curricula, insistence on academic discipline, imparting of Holistic Education and adoption of global higher education practices with the support of creative and dedicated staff.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The University Grants Commission (UGC) of India conferred Autonomy to Christ College in 2004 and identified it as an Institution with Potential for Excellence in 2006. In 2008, under Section 3 of the UGC Act, 1956, the Ministry of Human Resource Development of the Government of India declared the institution a Deemed to be University. The University is ranked among top 100 universities in India at 63 in the NIRF India Ranking 2025.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-semibold mb-4 text-primary">The University Today</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The multi-disciplinary University focuses on teaching, research and service, offering Bachelor, Master and Doctoral programmes in humanities, social sciences, sciences, commerce, management, engineering, architecture, education, and law to about 40,000+ students across campuses in Bangalore, Pune Lavasa, and Delhi NCR.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The campus is a living example of harmonious multiculturalism with students from all states and union territories of India and around 60 different countries. CHRIST (Deemed to be University) publishes six peer-reviewed research journals and has published more than 300 books. A promoter of sports, music and literary activities, it is a nurturing ground for creative excellence.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-semibold mb-4 text-primary">Mission</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              "CHRIST (Deemed to be University) is a nurturing ground for an individual's holistic development to make effective contribution to the society in a dynamic environment."
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((f, i) => (
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
          <p className="text-muted-foreground">📸 University campus photo — add your image here</p>
        </motion.div>
      </div>
    </section>
  );
}
