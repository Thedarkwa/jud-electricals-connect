import { motion } from "framer-motion";
import { Home, Building2, Factory, Wrench } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Domestic Services",
    items: ["Wiring of buildings", "CCTV camera installations", "Electrical maintenance"],
  },
  {
    icon: Building2,
    title: "Commercial Services",
    items: ["Wiring of offices", "Wiring of schools", "Wiring of churches"],
  },
  {
    icon: Factory,
    title: "Industrial Services",
    items: [
      "Transformer installation and termination",
      "Ring Main Unit installation and termination",
      "Industrial wiring",
      "Cable tray fabrication and installation",
      "Pumps and motors installations",
      "Plant installation",
      "Armored cable termination",
    ],
  },
  {
    icon: Wrench,
    title: "General Electrical Services",
    items: ["Building of electrical panels", "Building of ATS (Automatic Transfer Switch)"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Specialties = () => {
  return (
    <div className="pt-20">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
          >
            Areas of <span className="text-gradient-electric">Specialty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            From homes to heavy industry, we deliver expert electrical solutions across all sectors.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-8 card-elevated"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-card-foreground">{cat.title}</h2>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
