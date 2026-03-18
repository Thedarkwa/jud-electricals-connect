import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import panelWiring from "@/assets/gallery/panel-wiring.jpg";
import meterPanels from "@/assets/gallery/meter-panels.png";
import fieldWork from "@/assets/gallery/field-work.png";
import poleInstall from "@/assets/gallery/pole-install.jpg";
import distributionBoard from "@/assets/gallery/distribution-board.jpg";
import busbarCables from "@/assets/gallery/busbar-cables.jpg";
import transformer from "@/assets/gallery/transformer.jpg";
import cctvCameras from "@/assets/gallery/cctv-cameras.jpg";
import generatorPanel from "@/assets/gallery/generator-panel.jpg";
import powerPoles from "@/assets/gallery/power-poles.jpg";
import circuitBreakers from "@/assets/gallery/circuit-breakers.jpg";
import firePump from "@/assets/gallery/fire-pump.png";
import cableTrayInstall from "@/assets/gallery/cable-tray-install.jpg";
import cableTrays from "@/assets/gallery/cable-trays.png";
import cableTrayRouting from "@/assets/gallery/cable-tray-routing.jpg";
import contactors from "@/assets/gallery/contactors.jpg";
import pumpSystem from "@/assets/gallery/pump-system.jpg";
import panelWork from "@/assets/gallery/panel-work.png";

const projects = [
  { src: panelWiring, title: "Panel Wiring", category: "Panels" },
  { src: meterPanels, title: "Meter & Distribution Panels", category: "Panels" },
  { src: fieldWork, title: "On-Site Cable Termination", category: "Industrial" },
  { src: poleInstall, title: "Outdoor Pole Installation", category: "Industrial" },
  { src: distributionBoard, title: "Distribution Board Assembly", category: "Panels" },
  { src: busbarCables, title: "Busbar & Cable Connections", category: "Industrial" },
  { src: transformer, title: "Transformer Installation", category: "Industrial" },
  { src: cctvCameras, title: "CCTV Camera Setup", category: "Security" },
  { src: generatorPanel, title: "Generator Control Panel", category: "Panels" },
  { src: powerPoles, title: "Power Line Installation", category: "Industrial" },
  { src: circuitBreakers, title: "Circuit Breaker Board", category: "Panels" },
  { src: firePump, title: "Fire Pump & Cable System", category: "Industrial" },
  { src: cableTrayInstall, title: "Cable Tray Installation", category: "Industrial" },
  { src: cableTrays, title: "Cable Tray Network", category: "Industrial" },
  { src: cableTrayRouting, title: "Cable Tray Routing", category: "Industrial" },
  { src: contactors, title: "Contactor Assembly", category: "Panels" },
  { src: pumpSystem, title: "Pump Control System", category: "Industrial" },
  { src: panelWork, title: "Distribution Panel Work", category: "Panels" },
];

const categories = ["All", "Panels", "Industrial", "Security"];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

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
            <span className="text-sm font-medium text-gold">Our Work</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-6"
          >
            Project <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto"
          >
            A showcase of our completed electrical installations, panel assemblies, and industrial projects across Ghana.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-electric text-primary-foreground shadow-lg shadow-electric/30"
                    : "glass text-muted-foreground hover:text-foreground hover:border-electric/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <AnimatedCard key={project.title} delay={i * 0.07}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="mb-5 group relative cursor-pointer rounded-2xl overflow-hidden card-premium break-inside-avoid"
                    onClick={() => setLightbox(projects.indexOf(project))}
                  >
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                      <span className="text-xs font-semibold text-electric uppercase tracking-wider mb-1">{project.category}</span>
                      <h3 className="font-heading text-lg font-bold text-secondary-foreground">{project.title}</h3>
                    </div>
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                      <ZoomIn className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-secondary-foreground hover:bg-electric/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              src={projects[lightbox].src}
              alt={projects[lightbox].title}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs text-electric font-semibold uppercase tracking-wider">{projects[lightbox].category}</p>
              <p className="font-heading text-lg font-bold text-secondary-foreground mt-1">{projects[lightbox].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
