"use client";

import { motion } from "framer-motion";

const TESTIMONIALS: Array<{ name: string; role: string; quote: string }> = [
  // TODO: insert real client testimonial here
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

        {TESTIMONIALS.length > 0 ? (
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <p className="text-dark/80 text-2xl font-medium">
              References available on request — drop us a line.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
