import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Building2, Factory, Wrench, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Home,
    title: "Domestic Services",
    gradient: "from-electric to-electric/60",
    items: ["Wiring of buildings", "CCTV camera installations", "Electrical maintenance"],
  },
  {
    icon: Building2,
    title: "Commercial Services",
    gradient: "from-gold to-gold/60",
    items: ["Wiring of offices", "Wiring of schools", "Wiring of churches"],
  },
  {
    icon: Factory,
    title: "Industrial Services",
    gradient: "from-electric to-electric/60",
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
    gradient: "from-gold to-gold/60",
    items: ["Building of electrical panels", "Building of ATS (Automatic Transfer Switch)"],
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Specialties = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-navy py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark-radial" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-gold">Expert Specializations</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-6"
          >
            Areas of <span className="text-gradient-gold">Specialty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto"
          >
            From homes to heavy industry, we deliver expert electrical solutions across all sectors with precision and care.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl card-premium overflow-hidden h-full flex flex-col">
                  {/* Header band */}
                  <div className={`h-1.5 bg-gradient-to-r ${cat.gradient}`} />
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                        <cat.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl font-extrabold text-card-foreground">{cat.title}</h2>
                        <span className="text-muted-foreground text-sm">{cat.items.length} specializations</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm group">
                          <CheckCircle className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                          <span className="group-hover:text-foreground transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-16">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Discuss Your Project
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
