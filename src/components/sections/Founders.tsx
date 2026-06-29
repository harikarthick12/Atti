"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useState } from "react";

const FOUNDERS = [
  {
    name: "Hari Karthick",
    role: "Co-Founder / Tech Lead",
    bio: "Bridging the gap between beautiful design and scalable architecture.",
    quote: "We don't just build websites, we build digital homes for your ideas.",
    image: "/team/hari-karthick.jpg", 
  },
  {
    name: "Prasanna",
    role: "Co-Founder / Design",
    bio: "Ensuring every pixel and process feels just right.",
    quote: "Good design is accessible, honest, and built with the community in mind.",
    image: "/team/prasanna.jpg", 
  }
];

export default function Founders() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-6">
            Meet the Builders
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {FOUNDERS.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({ founder, index }: { founder: typeof FOUNDERS[0], index: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = founder.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group bg-white/5 backdrop-blur-xl hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500 shadow-xl hover:shadow-2xl"
    >
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-primary/30 group-hover:border-highlight transition-colors duration-500 shadow-lg bg-primary/10 flex items-center justify-center">
          {!imgError ? (
            <img
              src={founder.image}
              alt={`Atti team member ${founder.name}, ${founder.role}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-3xl font-black text-primary/60 uppercase">{initials}</span>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-accent">{founder.name}</h3>
          <p className="text-highlight text-sm font-medium tracking-wide uppercase mt-1">
            {founder.role}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-lg text-accent font-medium leading-relaxed italic relative z-10">
          <Quote size={20} className="text-highlight/40 absolute -top-2 -left-2 -z-10" />
          "{founder.quote}"
        </p>
        <div className="w-full h-px bg-white/10" />
        <p className="text-accent/60 leading-relaxed text-sm">
          {founder.bio}
        </p>
      </div>
    </motion.div>
  );
}
