"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const PROJECT_LINKS: Record<string, string> = {
  "APE": "", // TODO: insert real GitHub/Live demo URL
  "Payanam Parcel": "", // TODO: insert real GitHub/Live demo URL
  "Audadham": "", // TODO: insert real GitHub/Live demo URL
};

const PROJECTS = [
  {
    name: "APE",
    description: "Advanced Photo Extractor - Facial recognition-based event photo retrieval system.",
    tags: ["Next.js", "face-api.js", "TensorFlow.js"],
  },
  {
    name: "Payanam Parcel",
    description: "Peer-to-peer crowdsourced delivery app.",
    tags: ["Flutter", "Node.js", "Socket.io", "React"],
  },
  {
    name: "Audadham",
    description: "Healthcare companion app with OCR prescription scanning and medicine management.",
    tags: ["Flutter", "OCR", "Healthcare"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Featured Builds
            </h2>
            <div className="w-24 h-1 bg-highlight rounded-full mb-6" />
            <p className="text-lg text-dark/70 max-w-2xl">
              Projects we've built to sharpen our craft — and prove what we can do for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 self-start md:self-auto text-primary"
          >
            <span className="font-black text-4xl leading-none">3</span>
            <span className="text-sm uppercase tracking-wider font-bold leading-tight">Projects<br/>Delivered</span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-b border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-black text-dark mb-4 group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-primary font-bold text-sm uppercase tracking-wide">
                      {tag} {tag !== project.tags[project.tags.length - 1] && "·"}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col md:items-end md:text-right gap-6">
                <p className="text-dark/70 text-lg leading-relaxed max-w-md">
                  {project.description}
                </p>
                {PROJECT_LINKS[project.name] ? (
                  <a
                    href={PROJECT_LINKS[project.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-primary hover:text-highlight transition-colors"
                  >
                    View Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-bold text-primary/40 cursor-not-allowed">
                    Coming Soon <ArrowRight size={20} />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
