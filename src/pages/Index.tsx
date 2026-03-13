import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Zap, Shield, Users, CheckCircle, ArrowRight, ArrowUpRight,
  Lightbulb, Factory, Wrench, ClipboardCheck, HeartHandshake,
  Phone, Building2, Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg2.jpg";

const services = [
  { icon: Shield, title: "Earthing & Lightning Protection", desc: "Professional grounding and surge protection systems for buildings and equipment." },
  { icon: Zap, title: "Electrical Installations", desc: "Complete electrical installation services across all sectors and scales." },
  { icon: Factory, title: "Industrial Wiring", desc: "High-capacity wiring solutions for factories and industrial facilities." },
  { icon: Lightbulb, title: "Lighting Consulting", desc: "Expert lighting design balancing aesthetics, comfort, and efficiency." },
  { icon: ClipboardCheck, title: "Project Management", desc: "End-to-end supervision ensuring quality, safety, and timely delivery." },
  { icon: Wrench, title: "Energy Audit", desc: "Comprehensive energy analysis to reduce costs and boost efficiency." },
];

const whyUs = [
  { icon: CheckCircle, label: "Qualified Engineers", desc: "Certified professionals with years of expertise" },
  { icon: HeartHandshake, label: "Customer Focus", desc: "Your satisfaction is our top priority" },
  { icon: Shield, label: "Safety First", desc: "Rigorous safety standards on every project" },
  { icon: Users, label: "24/7 Support", desc: "Technical support whenever you need it" },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

const sectors = [
  { icon: Home, title: "Residential", desc: "Safe & modern home wiring" },
  { icon: Building2, title: "Commercial", desc: "Office & business solutions" },
  { icon: Factory, title: "Industrial", desc: "Heavy-duty installations" },
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

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
          <div className="absolute inset-0 bg-gradient-dark-radial" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(217 91% 50%) 1px, transparent 1px), linear-gradient(to right, hsl(217 91% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative container mx-auto px-4 lg:px-8 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:py-32">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                <span className="text-sm font-medium text-electric">Trusted Electrical Contractor in Ghana</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-secondary-foreground leading-[1.1] mb-6"
              >
                Powering Ghana's{" "}
                <span className="text-gradient-electric">Future</span> with Expert
                Electrical Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-secondary-foreground/60 mb-10 max-w-lg leading-relaxed"
              >
                Safe, reliable, and innovative electrical engineering for homes, businesses, and industries — from concept to completion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    <Zap className="w-5 h-5" />
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="hero-outline" size="xl">
                    Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-16 flex flex-wrap gap-8 lg:gap-12"
              >
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="stat-number text-3xl lg:text-4xl">{stat.value}</div>
                    <div className="text-secondary-foreground/40 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right side - sector cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex flex-col gap-5 items-end"
            >
              {sectors.map((sector, i) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className={`glass rounded-2xl p-6 w-72 hover:bg-electric/10 transition-all duration-500 cursor-default group ${
                    i === 1 ? "mr-8" : i === 2 ? "mr-16" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric/20 flex items-center justify-center group-hover:bg-electric/30 transition-colors">
                      <sector.icon className="w-6 h-6 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-secondary-foreground text-lg">{sector.title}</h3>
                      <p className="text-secondary-foreground/50 text-sm mt-1">{sector.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/[0.03] rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-6 line-decoration">
                Engineering Excellence Since Day One
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Jud Electricals Limited Company is a fast-growing electrical engineering company delivering safe, reliable, and innovative electrical solutions across domestic, commercial, and industrial sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of qualified engineers bring expertise, precision, and dedication to every project — whether it's a residential installation or a large-scale industrial system.
              </p>
              <Link to="/about">
                <Button variant="hero-outline" size="lg">
                  Learn More About Us
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Projects Done", color: "bg-electric/10 text-electric" },
                { number: "100%", label: "Safety Record", color: "bg-gold/10 text-gold" },
                { number: "24/7", label: "Support Available", color: "bg-gold/10 text-gold" },
                { number: "15+", label: "Years of Trust", color: "bg-electric/10 text-electric" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 card-premium bg-card text-center ${i === 1 || i === 2 ? "mt-8" : ""}`}
                >
                  <div className={`text-3xl font-heading font-extrabold mb-2 ${item.color.split(" ")[1]}`}>
                    {item.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 lg:py-32 bg-muted relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4 line-decoration line-decoration-center">
              Our Key Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg mt-6">
              From design to delivery, we provide end-to-end electrical engineering solutions.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-7 card-premium border-glow group h-full">
                  <div className="w-14 h-14 rounded-xl bg-electric/10 group-hover:bg-gradient-electric flex items-center justify-center mb-5 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-electric group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/services">
              <Button variant="electric" size="lg">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark-radial" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[100px] -translate-y-1/2" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mt-3 mb-4">
              Why Choose <span className="text-gradient-gold">Jud Electricals?</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 text-center hover:bg-electric/10 transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mx-auto mb-5 transition-all">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-foreground text-base mb-2">{item.label}</h3>
                  <p className="text-secondary-foreground/50 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/[0.06] rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric mb-8">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Ready to get started?</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Let's Power Your Next{" "}
                <span className="text-gradient-electric">Project</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
                Contact us today for a free consultation and quote on your electrical needs. We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    <Zap className="w-5 h-5" />
                    Contact Us Now
                  </Button>
                </Link>
                <a href="tel:+233547656141">
                  <Button variant="hero-outline" size="xl">
                    <Phone className="w-5 h-5" />
                    Call Us Directly
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
