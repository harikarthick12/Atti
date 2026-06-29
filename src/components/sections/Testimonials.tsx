"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Placeholder Client 1",
    role: "CEO, Tech Startup",
    quote: "Working with Atti was an absolute breath of fresh air. They brought our vision to life faster than we expected.",
  },
  {
    name: "Placeholder Client 2",
    role: "Local Business Owner",
    quote: "Incredibly supportive and creative. The new brand identity perfectly captures what we are about.",
  },
  {
    name: "Placeholder Client 3",
    role: "E-commerce Founder",
    quote: "The web app they built is stunning and performant. Highly recommend this talented team.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Words From Our Neighbours
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col h-full"
            >
              <p className="text-dark/80 text-2xl font-medium leading-snug mb-8 relative z-10 flex-1">
                <span className="absolute -top-4 -left-4 text-6xl text-primary/10 -z-10 font-serif">"</span>
                {testimonial.quote}
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-dark text-lg">{testimonial.name}</h4>
                <p className="text-primary font-bold text-sm tracking-wide uppercase">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
