"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code, PenTool, Layout, Server, Shield, Zap, Leaf } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    description: "Portfolios, business sites, e-commerce, and full-stack solutions tailored to you.",
    icon: Code,
    startingPrice: "4,000",
    tiers: [
      { name: "Basic (1–3 pages)", price: "₹4,000 – ₹8,000" },
      { name: "Business Website (5–8 pages)", price: "₹8,000 – ₹20,000" },
      { name: "Premium/Luxury Website", price: "₹20,000 – ₹50,000" },
    ]
  },
  {
    title: "UI/UX Design",
    description: "App design, website design, wireframes, and interactive prototypes.",
    icon: Layout,
    startingPrice: "2,500",
    tiers: [
      { name: "Landing page UI", price: "₹2,500 – ₹7,000" },
      { name: "Full website UI", price: "₹8,000 – ₹25,000" },
      { name: "Basic app UI", price: "₹6,000 – ₹20,000" },
      { name: "Advanced product UI/UX", price: "₹20,000 – ₹50,000" },
    ]
  },
  {
    title: "Branding",
    description: "Logo, brand identity, posters, and comprehensive social media kits.",
    icon: PenTool,
    startingPrice: "2,000",
    tiers: [
      { name: "Logo design", price: "₹2,000 – ₹8,000" },
      { name: "Brand kit (logo + colors + typography)", price: "₹5,000 – ₹15,000" },
      { name: "Full branding package", price: "₹15,000 – ₹40,000" },
    ]
  },
  {
    title: "Domain & Hosting Setup",
    description: "Domain registration, hosting setup, seamless deployment and maintenance.",
    icon: Server,
    startingPrice: "500",
    tiers: [
      { name: "Domain purchase assistance", price: "₹500 – ₹1,500 service fee" },
      { name: "Hosting setup", price: "₹1,500 – ₹5,000" },
      { name: "Deployment + SSL + email setup", price: "₹2,000 – ₹8,000" },
    ]
  },
  {
    title: "Cyber Security",
    description: "Security audits, basic protection, and vulnerability testing for peace of mind.",
    icon: Shield,
    startingPrice: "5,000",
    tiers: [
      { name: "Website security audit", price: "₹5,000 – ₹15,000" },
      { name: "Vulnerability testing", price: "₹8,000 – ₹25,000" },
      { name: "Security hardening", price: "₹10,000 – ₹30,000" },
      { name: "Monthly monitoring", price: "₹5,000 – ₹20,000/month" },
    ]
  },
  {
    title: "Automation",
    description: "Workflow automation, intelligent chatbots, and AI integrations.",
    icon: Zap,
    startingPrice: "8,000",
    tiers: [
      { name: "WhatsApp automation", price: "₹8,000 – ₹25,000" },
      { name: "CRM automation", price: "₹10,000 – ₹30,000" },
      { name: "AI workflow automation", price: "₹15,000 – ₹50,000" },
      { name: "Custom business automation", price: "₹20,000 – ₹1L+" },
    ]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

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
              onClick={() => setSelectedService(service)}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-all duration-300 transform-gpu overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 via-highlight/0 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/30 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/50 border border-primary/20">
                  <service.icon size={28} className="text-highlight" />
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4">{service.title}</h3>
                <p className="text-accent/60 leading-relaxed group-hover:text-accent/80 transition-colors mb-6">
                  {service.description}
                </p>
                <div className="inline-block bg-primary/10 text-highlight px-3 py-1 rounded-full text-sm font-bold border border-primary/20">
                  Starting from ₹{service.startingPrice}
                </div>
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

      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceModal({ service, onClose }: { service: typeof SERVICES[0], onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative max-w-lg w-full bg-dark rounded-3xl overflow-hidden shadow-2xl border border-accent/20 p-6 sm:p-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white/10 text-accent rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-4 mb-6 pr-8">
          <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center border border-primary/20 shrink-0">
            <service.icon size={32} className="text-highlight" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-accent">{service.title}</h3>
            <p className="text-accent/60 text-sm mt-1">{service.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {service.tiers.map((tier, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-accent mb-1 sm:mb-0">{tier.name}</span>
              <span className="text-highlight font-bold shrink-0">{tier.price}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
