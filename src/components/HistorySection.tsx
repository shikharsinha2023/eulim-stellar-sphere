import { motion } from "framer-motion";

const milestones = [
  { year: "1966", title: "Society Registered", desc: "Christ College registered as a society under Mysore Societies Registration Act." },
  { year: "1969", title: "College Founded", desc: "Blessing of the newly constructed building and commencement of the first academic year on 15 July. Started Pre-University Courses under Bangalore University." },
  { year: "1970", title: "Degree Courses Introduced", desc: "Courses in BA, BSc, and BCom were introduced." },
  { year: "1979", title: "Co-Education Begins", desc: "Christ College started co-education, opening its doors to all students." },
  { year: "1993", title: "Silver Jubilee", desc: "Christ College celebrated 25 years of academic excellence." },
  { year: "1994", title: "MBA & MCA Launched", desc: "MBA and MCA programmes introduced, expanding into professional education." },
  { year: "1998", title: "First NAAC Accreditation", desc: "Christ College became the first educational institution in Karnataka to be accredited by NAAC." },
  { year: "2004", title: "Autonomous Status", desc: "Autonomous status granted by UGC, giving the college academic independence." },
  { year: "2006", title: "Potential for Excellence", desc: "UGC declared Christ College as an Institution with Potential for Excellence. Main Auditorium with 2000 seating capacity inaugurated." },
  { year: "2008", title: "Deemed to be University", desc: "Ministry of HRD, Government of India conferred Deemed to be University status on Christ College on 22 July." },
  { year: "2009", title: "PhD Programmes & Engineering", desc: "Formal inauguration of Faculty of Engineering at Kengeri Campus. PhD programmes launched." },
  { year: "2014", title: "Multi-Campus Expansion", desc: "Blessing and inauguration of Pune Lavasa Campus and Delhi NCR Campus at Ghaziabad." },
  { year: "2016", title: "NAAC 'A' Grade", desc: "NAAC awarded highest grade 'A' on four-point scale. Bannerghatta Road Campus inaugurated." },
  { year: "2019", title: "Off Campuses Approved", desc: "Government of India approved Off Campuses at Pune Lavasa and Delhi NCR. School System introduced." },
  { year: "2022", title: "NAAC A+ & Yeshwanthpur", desc: "Reaccredited by NAAC with A+ Grade. Blessing and inauguration of Bangalore Yeshwanthpur Campus." },
  { year: "2023", title: "NEP 2020 & NIRF Ranking", desc: "National Education Policy 2020 implemented. Ranked among top 100 universities in NIRF at 67." },
  { year: "2024", title: "UN SDG Hub Chair", desc: "Appointed as the SDG Hub 5 Chair by the United Nations Academic Impact (UNAI) for the 2025-2027 cohort." },
  { year: "2025", title: "Online Programmes", desc: "UGC and AICTE grant permission to offer Bachelor and Master programmes online. First IB-integrated MA programme in India introduced." },
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Milestones</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From a small college in 1969 to a multi-campus Deemed to be University — over five decades of excellence.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year + item.title}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
