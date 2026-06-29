"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope. A standard landing page might take 1–2 weeks, while a full web app could take 4–8 weeks. We'll give you a clear timeline during our discover call.",
  },
  {
    question: "Do you sign a contract or NDA?",
    answer: "Yes, we always sign an agreement detailing the scope of work, timeline, and payment terms to protect both parties. NDAs are also welcome if required for your project.",
  },
  {
    question: "Who owns the code and design files after delivery?",
    answer: "You do. Once the final payment is made, 100% of the ownership rights for the code, design assets, and intellectual property are transferred to you.",
  },
  {
    question: "What are your payment terms?",
    answer: "We typically require a 50% deposit to start the project, and the remaining 50% is due upon completion and your final approval before launch.",
  },
  {
    question: "Do you offer support after launch?",
    answer: "Absolutely. We offer a standard 30-day bug-fix guarantee after launch. Beyond that, we can discuss affordable maintenance packages to keep your product updated.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-primary/20 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-bold text-dark text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary shrink-0"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-dark/70 leading-relaxed border-t border-primary/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
