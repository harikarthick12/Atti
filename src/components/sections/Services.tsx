"use client";

import { motion } from "framer-motion";
import { Code, PenTool, Layout, Server, Shield, Zap, Leaf } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    description: "Portfolios, business sites, e-commerce, and full-stack solutions tailored to you.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "App design, website design, wireframes, and interactive prototypes.",
    icon: Layout,
  },
  {
    title: "Branding",
    description: "Logo, brand identity, posters, and comprehensive social media kits.",
    icon: PenTool,
  },
  {
    title: "Domain & Hosting",
    description: "Domain registration, hosting setup, seamless deployment and maintenance.",
    icon: Server,
  },
  {
    title: "Cyber Security",
    description: "Security audits, basic protection, and vulnerability testing for peace of mind.",
    icon: Shield,
  },
  {
    title: "Automation",
    description: "Workflow automation, intelligent chatbots, and AI integrations.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-all duration-300 transform-gpu overflow-hidden shadow-xl hover:shadow-2xl"
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 via-highlight/0 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/30 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/50 border border-primary/20">
                  <service.icon size={28} className="text-highlight" />
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4">{service.title}</h3>
                <p className="text-accent/60 leading-relaxed group-hover:text-accent/80 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative Leaf */}
              <Leaf 
                size={80} 
                className="absolute -bottom-4 -right-4 text-primary/10 -rotate-12 group-hover:text-primary/30 transition-colors duration-500" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
