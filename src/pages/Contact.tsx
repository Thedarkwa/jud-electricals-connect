import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-20">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
          >
            Contact <span className="text-gradient-electric">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Get in touch for a free consultation and quote.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to hear from you. Reach out for any electrical service inquiries, quotes, or consultations.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">Address</h4>
                    <p className="text-muted-foreground text-sm">P.O. Box 5, Kokompe – Tema, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">Phone</h4>
                    <p className="text-muted-foreground text-sm">+233 547 656 141</p>
                    <p className="text-muted-foreground text-sm">+233 544 116 172</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm">ceo.judelectricals@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-elevated space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
                    <Input placeholder="John Doe" required className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone Number</label>
                    <Input placeholder="+233 XXX XXX XXX" required className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
                  <Input type="email" placeholder="you@example.com" required className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Service Needed</label>
                  <Input placeholder="e.g., Electrical Installation" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} required className="bg-background" />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-electric"
                  size="lg"
                >
                  {loading ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
