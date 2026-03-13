import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Users, Zap, ShieldCheck, Handshake, Clock, Sparkles } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  { icon: ShieldCheck, label: "Integrity", desc: "Transparent and honest in all dealings" },
  { icon: Heart, label: "Customer Value", desc: "Exceeding expectations every time" },
  { icon: Sparkles, label: "Professionalism", desc: "High standards in all we do" },
  { icon: Users, label: "Social Responsibility", desc: "Giving back to our communities" },
  { icon: Handshake, label: "Teamwork", desc: "Collaborative approach to success" },
  { icon: Clock, label: "Speed", desc: "Timely project delivery always" },
  { icon: Heart, label: "Compassion", desc: "We care about our people" },
  { icon: Zap, label: "Commitment", desc: "Dedicated to excellence" },
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

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/90" />
          <div className="absolute inset-0 bg-gradient-dark-radial" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            <span className="text-sm font-medium text-electric">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-6"
          >
            About <span className="text-gradient-electric">Jud Electricals</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Committed to delivering high-quality electrical engineering solutions with safety, integrity, and customer satisfaction at our core.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-10 card-premium border-l-4 border-l-electric h-full">
                <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-electric" />
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-card-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  One-stop solution provider for electrification needs, leveraging future technologies with an utmost focus on safety, integrity, value for customers, and sustainability for future generations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-card rounded-2xl p-10 card-premium border-l-4 border-l-gold h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-card-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the best contractor in Ghana in the chosen construction fields that we are working.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mt-3">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.label} delay={i * 0.06}>
                <div className="glass rounded-2xl p-6 text-center hover:bg-electric/10 transition-all duration-500 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mx-auto mb-4 transition-all">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-foreground text-sm mb-1">{v.label}</h3>
                  <p className="text-secondary-foreground/40 text-xs">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
