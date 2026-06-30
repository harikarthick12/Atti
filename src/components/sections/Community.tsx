"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const TEAM = [
  { name: "Hari Karthick", role: "Co-Founder", image: "/team/hari-karthick.jpg" },
  { name: "Prasanna", role: "Co-Founder", image: "/team/prasanna.jpg" },
  { name: "Siva", role: "Designer", image: "/team/siva.jpg" },
  { name: "Selva Kumaran", role: "Developer", image: "/team/selva-kumaran.jpg" },
  { name: "Sanjay Kumar", role: "Cyber Security", image: "/team/sanjay-kumar.jpg" },
];

export default function Community() {
  const [hoverKey, setHoverKey] = useState(0);

  return (
    <section 
      id="team" 
      className="py-24 bg-accent relative overflow-hidden"
      onMouseEnter={() => setHoverKey(k => k + 1)}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Our Community
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full mb-8" />
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            We are rooted in friendship and collaboration, growing together as one system.
          </p>
        </motion.div>

        {/* Root System Avatar Layout (CSS Grid based simulation of circular/organic layout) */}
        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          
          {/* SVG Connecting Lines (Abstract Roots) */}
          <svg key={hoverKey} className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-primary" viewBox="0 0 800 600">
             {TEAM.map((_, i) => {
               const angle = (i / TEAM.length) * Math.PI * 2 - Math.PI / 2 - (Math.PI / 5);
               const radius = 220;
               const endX = 400 + Math.cos(angle) * radius;
               const endY = 300 + Math.sin(angle) * radius;
               
               // Control point for curve
               const cpX = 400 + (endX - 400) * 0.5;
               const cpY = 300 + (endY - 300) * 0.5 - 50; 

               return (
                 <path 
                   key={i}
                   d={`M400,300 Q${cpX},${cpY} ${endX},${endY}`} 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="4" 
                   className="path-draw" 
                 />
               )
             })}
          </svg>

          {/* Central Node (Core Community Spirit / Logo placeholder) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5 }}
            className="absolute z-10 w-32 h-32 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(46,74,50,0.4)] border-4 border-accent/30"
          >
             <span className="text-accent font-black text-xl">Atti</span>
          </motion.div>

          {/* Member Nodes */}
          {TEAM.map((member, i) => (
            <MemberNode key={member.name} member={member} i={i} total={TEAM.length} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .path-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawRoot 2s ease-out forwards;
        }
        @keyframes drawRoot {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}

function MemberNode({ member, i, total }: { member: typeof TEAM[0], i: number, total: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2);
  
  // Positioning math for a circle around center, offset by half a segment to level the top 2
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2 - (Math.PI / 5);
  const radius = 220;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      whileInView={{ opacity: 1, x, y }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: i * 0.1 + 0.5, type: "spring" }}
      whileHover={{ scale: 1.1, zIndex: 20 }}
      className="absolute w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center group"
      style={{ marginLeft: "-3rem", marginTop: "-3rem" }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-lg mb-2 bg-primary/10 flex items-center justify-center">
          {!imgError ? (
          <img 
            src={member.image} 
            alt={`Atti team member ${member.name}, ${member.role}`} 
            className="w-full h-full object-cover"
            onError={() => setImgError(true)} 
          />
        ) : (
          <span className="text-3xl font-black text-primary/60 uppercase">{initials}</span>
        )}
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 bg-dark text-accent text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap mt-2 pointer-events-none z-30">
        <span className="font-bold block">{member.name}</span>
        <span className="text-highlight/80">{member.role}</span>
      </div>
    </motion.div>
  );
}
