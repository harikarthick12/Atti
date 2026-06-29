"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Discover",
    description: "We learn your goals, audience, and budget in a free intro call.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Wireframes and direction, reviewed with you before any code is written.",
    icon: PenTool,
  },
  {
    title: "Build",
    description: "Agile development with regular check-ins.",
    icon: Code,
  },
  {
    title: "Launch & Support",
    description: "We deploy, train you, and stay reachable after handoff.",
    icon: Rocket,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-6">
            How We Work
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-all duration-300 transform-gpu overflow-hidden shadow-xl hover:shadow-2xl flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 via-highlight/0 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-14 h-14 bg-primary/30 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/50 border border-primary/20">
                  <step.icon size={28} className="text-highlight" />
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4">{index + 1}. {step.title}</h3>
                <p className="text-accent/60 leading-relaxed group-hover:text-accent/80 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
