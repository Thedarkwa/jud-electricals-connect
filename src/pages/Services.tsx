import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, Search, FileCheck, Package, Lightbulb, BarChart3,
  FileText, Lamp, PenTool, ShoppingCart, ClipboardCheck, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Shield, title: "Earthing and Lightning Protection", desc: "We provide professional grounding and lightning protection systems to protect buildings, electrical equipment, and lives from electrical surges.", tag: "Safety" },
  { icon: Search, title: "Site Reconnaissance Survey", desc: "Our engineers visit the project site to inspect and gather technical data needed to properly plan electrical systems.", tag: "Planning" },
  { icon: FileCheck, title: "Project Specification Review", desc: "Our team carefully analyzes project drawings and specifications to determine cost, schedule, and risks before implementation.", tag: "Analysis" },
  { icon: Package, title: "Material Supply", desc: "We supply quality electrical materials and lighting products suitable for both retail and industrial environments.", tag: "Supply" },
  { icon: Lightbulb, title: "Lighting Consulting", desc: "Our experts assist clients in selecting appropriate lighting systems that balance architectural design, comfort, and efficiency.", tag: "Design" },
  { icon: BarChart3, title: "Energy Audit", desc: "We analyze energy usage and recommend improvements that reduce electricity consumption and increase efficiency.", tag: "Efficiency" },
  { icon: FileText, title: "Lighting Proposal", desc: "Our engineers evaluate lighting projects and develop detailed lighting specifications and calculations.", tag: "Engineering" },
  { icon: Lamp, title: "Lighting Supply", desc: "We provide lighting fixtures sourced from trusted international manufacturers.", tag: "Supply" },
  { icon: PenTool, title: "Concept Design", desc: "Our team develops electrical design concepts based on the client's requirements.", tag: "Design" },
  { icon: ShoppingCart, title: "Procurement", desc: "We assist in sourcing materials and equipment at competitive prices to ensure the best value for clients.", tag: "Sourcing" },
  { icon: ClipboardCheck, title: "Project Management", desc: "We supervise projects from start to completion, ensuring quality, safety, and timely delivery.", tag: "Management" },
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

const Services = () => {
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
            <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            <span className="text-sm font-medium text-electric">Full-Service Electrical Engineering</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-6"
          >
            Our <span className="text-gradient-electric">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Comprehensive electrical engineering services tailored for every project scope and scale — from consultation to completion.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <div className="bg-card rounded-2xl p-7 card-premium border-glow group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-electric/10 group-hover:bg-gradient-electric flex items-center justify-center transition-all duration-500">
                      <s.icon className="w-7 h-7 text-electric group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-electric/60 bg-electric/5 px-3 py-1 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-16">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
