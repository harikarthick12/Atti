"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 2000;
  
  const [positions] = useState(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#7BAE4F"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-accent">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
        {mounted && (
          <Canvas camera={{ position: [0, 0, 5] }}>
            <color attach="background" args={["#E8D9C4"]} />
            <ambientLight intensity={0.5} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
               <Particles />
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-6 relative"
        >
          {/* Abstract Seed / Tree icon */}
          <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="w-1 bg-primary absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full origin-bottom"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="w-8 h-8 bg-highlight rounded-full absolute top-0"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
              className="w-6 h-6 bg-primary rounded-full absolute top-6 right-2"
            />
             <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
              className="w-5 h-5 bg-secondary rounded-full absolute top-8 left-4"
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight mb-4 max-w-4xl mx-auto leading-tight">
            We build websites, brands, and apps that punch above their price.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6 max-w-3xl mx-auto">
            Your friendly neighbour ❤️ from the community — affordable, fast, and built with care.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Web dev, design, branding, security, and automation — community-powered, affordable, and built with love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="bg-primary text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-highlight hover:-translate-y-1 transition-all shadow-lg hover:shadow-primary/30 w-full sm:w-auto"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all w-full sm:w-auto"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-primary tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[2px] h-12 bg-primary rounded-full origin-top"
        />
      </motion.div>
    </section>
  );
}
