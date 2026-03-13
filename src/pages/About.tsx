import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Zap, ShieldCheck, Handshake, Clock, Sparkles } from "lucide-react";

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Heart, label: "Customer Value" },
  { icon: Sparkles, label: "Professionalism" },
  { icon: Users, label: "Social Responsibility" },
  { icon: Handshake, label: "Teamwork" },
  { icon: Clock, label: "Speed" },
  { icon: Heart, label: "Compassion" },
  { icon: Zap, label: "Commitment" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              About <span className="text-gradient-electric">Jud Electricals</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
              Jud Electricals Limited Company is committed to providing high-quality electrical engineering solutions while maintaining safety, integrity, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="bg-card rounded-xl p-8 card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-card-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                One-stop solution provider for electrification needs, leveraging future technologies with an utmost focus on safety, integrity, value for customers, and sustainability for future generations.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="bg-card rounded-xl p-8 card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-card-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the best contractor in Ghana in the chosen construction fields that we are working.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 text-center card-elevated"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-heading font-medium text-sm text-card-foreground">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
