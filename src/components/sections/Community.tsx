"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const TEAM = [
  { name: "Hari Karthick", role: "Co-Founder", image: "/team/hari-karthick.jpg" },
  { name: "Prasanna", role: "Co-Founder", image: "/team/prasanna.jpg" },
  { name: "Siva", role: "Designer", image: "/team/siva.jpg" },
  { name: "Selva Kumaran", role: "Developer", image: "/team/selva-kumaran-new.jpg" },
  { name: "Sanjay Kumar", role: "Cyber Security", image: "/team/sanjay-kumar.jpg" },
];

export default function Community() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);

  return (
    <section
      id="team"
      className="py-24 bg-accent relative overflow-hidden"
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
        <div className="relative max-w-4xl mx-auto h-[350px] md:h-[600px] flex items-center justify-center transform scale-[0.55] sm:scale-[0.75] md:scale-100 origin-center mt-10 md:mt-0">

          {/* SVG Connecting Lines (Abstract Roots) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-primary" viewBox="0 0 800 600">
            {TEAM.map((_, i) => {
              const angle = (i / TEAM.length) * Math.PI * 2 - Math.PI / 2 - (Math.PI / 5);
              const radius = 220;
              const endX = 400 + Math.cos(angle) * radius;
              const endY = 300 + Math.sin(angle) * radius;

              // Control point for curve
              const cpX = 400 + (endX - 400) * 0.5;
              const cpY = 300 + (endY - 300) * 0.5 - 50;

              return (
                <motion.path
                  key={i}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  d={`M400,300 Q${cpX},${cpY} ${endX},${endY}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
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
            <MemberNode key={member.name} member={member} i={i} total={TEAM.length} onSelect={() => setSelectedMember(member)} />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedMember && (
          <EnlargedMemberModal key="modal" member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function EnlargedMemberModal({ member, onClose }: { member: typeof TEAM[0], onClose: () => void }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-sm sm:max-w-md w-full bg-primary/10 rounded-2xl overflow-hidden shadow-2xl p-2 border-2 border-accent"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center bg-primary/20">
          {!imgError ? (
            <Image
              src={member.image}
              alt={`Enlarged ${member.name}`}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-8xl font-black text-primary/60 uppercase">{initials}</span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 w-12 h-12 bg-dark/80 hover:bg-dark text-accent rounded-full flex items-center justify-center transition-colors shadow-xl border-2 border-accent/30 backdrop-blur-md z-[60] cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-4 right-4 text-center bg-dark/80 backdrop-blur-md py-3 px-4 rounded-xl text-accent shadow-lg border border-accent/20">
          <h3 className="text-2xl font-black">{member.name}</h3>
          <p className="text-highlight font-medium">{member.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MemberNode({ member, i, total, onSelect }: { member: typeof TEAM[0], i: number, total: number, onSelect: () => void }) {
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
      <div 
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-lg mb-2 bg-primary/10 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
        onClick={onSelect}
      >
        {!imgError ? (
          <Image
            src={member.image}
            alt={`Atti team member ${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 768px) 112px, 112px"
            className="object-cover"
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
