"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const TRAITS = [
  { title: "Affordable", desc: "Premium quality without the agency price tag." },
  { title: "Student Energy", desc: "Fresh perspectives and relentless drive." },
  { title: "Creative", desc: "Outside-the-box thinking for every challenge." },
  { title: "Fast", desc: "Agile execution and timely delivery." },
  { title: "Reliable", desc: "We communicate clearly and keep our promises." },
  { title: "Supportive", desc: "Long-term partnership, not just a transaction." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark text-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-6">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {TRAITS.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/40 transition-all">
                <CheckCircle2 className="text-highlight" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-accent group-hover:text-highlight transition-colors">
                  {trait.title}
                </h3>
                <p className="text-accent/60 leading-relaxed group-hover:text-accent/80 transition-colors">
                  {trait.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
