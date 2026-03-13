import { motion } from "framer-motion";
import {
  Shield, Search, FileCheck, Package, Lightbulb, BarChart3,
  FileText, Lamp, PenTool, ShoppingCart, ClipboardCheck,
} from "lucide-react";

const services = [
  { icon: Shield, title: "Earthing and Lightning Protection", desc: "We provide professional grounding and lightning protection systems to protect buildings, electrical equipment, and lives from electrical surges." },
  { icon: Search, title: "Site Reconnaissance Survey", desc: "Our engineers visit the project site to inspect and gather technical data needed to properly plan electrical systems." },
  { icon: FileCheck, title: "Project Specification Review", desc: "Our team carefully analyzes project drawings and specifications to determine cost, schedule, and risks before implementation." },
  { icon: Package, title: "Material Supply", desc: "We supply quality electrical materials and lighting products suitable for both retail and industrial environments." },
  { icon: Lightbulb, title: "Lighting Consulting", desc: "Our experts assist clients in selecting appropriate lighting systems that balance architectural design, comfort, and efficiency." },
  { icon: BarChart3, title: "Energy Audit", desc: "We analyze energy usage and recommend improvements that reduce electricity consumption and increase efficiency." },
  { icon: FileText, title: "Lighting Proposal", desc: "Our engineers evaluate lighting projects and develop detailed lighting specifications and calculations." },
  { icon: Lamp, title: "Lighting Supply", desc: "We provide lighting fixtures sourced from trusted international manufacturers." },
  { icon: PenTool, title: "Concept Design", desc: "Our team develops electrical design concepts based on the client's requirements." },
  { icon: ShoppingCart, title: "Procurement", desc: "We assist in sourcing materials and equipment at competitive prices to ensure the best value for clients." },
  { icon: ClipboardCheck, title: "Project Management", desc: "We supervise projects from start to completion, ensuring quality, safety, and timely delivery." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5 },
  }),
};

const Services = () => {
  return (
    <div className="pt-20">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
          >
            Our <span className="text-gradient-electric">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Comprehensive electrical engineering services for every project scope and scale.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 card-elevated group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
