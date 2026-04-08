import { motion } from "framer-motion";

const timeline = [
  { year: "2018", title: "Foundation", desc: "EULIM Science Club was founded by a group of passionate science students at the School of Sciences." },
  { year: "2019", title: "First Science Fair", desc: "Organized the first inter-departmental science fair, attracting over 200 participants." },
  { year: "2020", title: "Virtual Adaptation", desc: "Pivoted to virtual events, hosting online seminars with guest scientists from around the world." },
  { year: "2021", title: "Research Wing", desc: "Launched the undergraduate research wing, supporting student-led research projects." },
  { year: "2022", title: "National Recognition", desc: "Won multiple awards at national science competitions, putting EULIM on the map." },
  { year: "2023", title: "Community Outreach", desc: "Started science literacy programs in local schools, inspiring the next generation." },
  { year: "2024", title: "Growing Strong", desc: "Expanded to over 300 active members across multiple science departments." },
];

export default function HistorySection() {
  return (
    <section id="history" className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Club History</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 h-3 w-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-lg shadow-primary/30" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-sm font-bold text-primary">{item.year}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>

                {/* Image placeholder */}
                <div className="mt-3 rounded-lg border border-dashed border-border bg-muted/20 h-32 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">📸 Add image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
