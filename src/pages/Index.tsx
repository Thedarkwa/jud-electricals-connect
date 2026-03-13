import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap, Shield, Users, CheckCircle, ArrowRight,
  Lightbulb, Factory, Wrench, ClipboardCheck, HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Shield, title: "Earthing & Lightning Protection", desc: "Protecting buildings and equipment from electrical surges." },
  { icon: Zap, title: "Electrical Installations", desc: "Complete electrical installations for all sectors." },
  { icon: Factory, title: "Industrial Wiring", desc: "Powering factories and large-scale industrial facilities." },
  { icon: Lightbulb, title: "Lighting Consulting", desc: "Expert guidance on lighting design and efficiency." },
  { icon: ClipboardCheck, title: "Project Management", desc: "End-to-end project supervision and delivery." },
  { icon: Wrench, title: "Energy Audit", desc: "Optimizing energy usage and reducing costs." },
];

const whyUs = [
  { icon: CheckCircle, text: "Qualified Engineers" },
  { icon: HeartHandshake, text: "Customer Satisfaction" },
  { icon: Shield, text: "Safety Focused" },
  { icon: Users, text: "Technical Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted Electrical Contractor in Ghana</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Reliable Electrical Engineering{" "}
              <span className="text-gradient-electric">Solutions</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl">
              Delivering safe, innovative, and high-quality electrical solutions for homes, businesses, and industries across Ghana.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-electric text-base px-8">
                  <Zap className="w-5 h-5 mr-2" />
                  Request a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10 text-base px-8"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Powering Ghana's Future
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Jud Electricals Limited Company is a fast-growing electrical engineering company delivering safe, reliable, and innovative electrical solutions across domestic, commercial, and industrial sectors.
            </p>
            <Link to="/about">
              <Button variant="link" className="mt-4 text-primary">
                Learn More About Us <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Key Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive electrical solutions tailored for every need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-12"
            >
              Why Choose Jud Electricals?
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="font-heading font-medium text-sm text-secondary-foreground">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Contact us today for a free consultation and quote on your electrical needs.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 font-semibold"
              >
                Contact Us Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
