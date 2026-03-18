import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, Zap, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["P.O. Box 5, Kokompe", "Tema, Ghana"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+233 547 656 141", "+233 544 116 172"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["ceo.judelectricals@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Fri: 8AM – 6PM", "Sat: 9AM – 2PM"],
  },
];

const highlights = [
  { icon: Zap, text: "Free Consultation" },
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Clock, text: "Fast Response" },
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

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const text = `Hello Jud Electricals!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
    
    window.open(`https://wa.me/233245110490?text=${text}`, "_blank");
  };

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
            <span className="text-sm font-medium text-electric">Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-6"
          >
            Contact <span className="text-gradient-electric">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Ready to start your project? Reach out for a free consultation and quote.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {highlights.map((h) => (
              <div key={h.text} className="flex items-center gap-2 glass rounded-full px-5 py-2.5">
                <h.icon className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-secondary-foreground/80">{h.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((info, i) => (
                <AnimatedSection key={info.title} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-6 card-premium group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-electric/10 group-hover:bg-gradient-electric flex items-center justify-center transition-all duration-500 shrink-0">
                        <info.icon className="w-6 h-6 text-electric group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-card-foreground text-sm mb-1">{info.title}</h4>
                        {info.lines.map((line) => (
                          <p key={line} className="text-muted-foreground text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 lg:p-10 card-premium space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-extrabold text-card-foreground mb-1">Send us a message</h2>
                  <p className="text-muted-foreground text-sm">Fill out the form and we'll get back to you shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-card-foreground mb-2 block">Full Name</label>
                    <Input name="name" placeholder="John Doe" required className="bg-muted border-0 h-12 rounded-xl focus:ring-2 focus:ring-electric" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-card-foreground mb-2 block">Phone Number</label>
                    <Input name="phone" placeholder="+233 XXX XXX XXX" required className="bg-muted border-0 h-12 rounded-xl focus:ring-2 focus:ring-electric" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-card-foreground mb-2 block">Email Address</label>
                  <Input name="email" type="email" placeholder="you@example.com" required className="bg-muted border-0 h-12 rounded-xl focus:ring-2 focus:ring-electric" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-card-foreground mb-2 block">Service Needed</label>
                  <Input name="service" placeholder="e.g., Electrical Installation, Energy Audit" className="bg-muted border-0 h-12 rounded-xl focus:ring-2 focus:ring-electric" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-card-foreground mb-2 block">Your Message</label>
                  <Textarea name="message" placeholder="Tell us about your project requirements..." rows={5} required className="bg-muted border-0 rounded-xl focus:ring-2 focus:ring-electric resize-none" />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  variant="hero"
                  size="xl"
                  className="w-full"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
