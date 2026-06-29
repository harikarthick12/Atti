"use client";

import { motion } from "framer-motion";
import { Users, Heart, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-dark/80 leading-relaxed"
          >
            <p>
              We are a <strong className="text-primary font-bold">student-driven creative & tech community</strong>. 
              Atti started as a shared vision among passionate learners who wanted to bridge the gap between 
              raw talent and real-world impact.
            </p>
            <p>
              Our mission is simple: we help businesses and individuals build their digital presence 
              affordably, without compromising on quality or aesthetics. 
            </p>
            <p>
              We believe in growing together. We are not a cold, faceless agency — we are your friendly neighbours 
              from the community, ready to roll up our sleeves and build something beautiful with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Users, title: "Community First", color: "bg-primary text-accent" },
              { icon: Heart, title: "Built with Love", color: "bg-highlight text-dark" },
              { icon: Lightbulb, title: "Creative Minds", color: "bg-secondary text-accent sm:col-span-2" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`${item.color} p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg transition-transform`}
              >
                <item.icon size={40} className="mb-4" />
                <h3 className="font-bold text-xl">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
