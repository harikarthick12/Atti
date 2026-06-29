"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", budget: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark opacity-80" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-black text-accent mb-4">
            Let's <span className="text-highlight">Talk.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-accent/80 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, or just want to say hi to your friendly neighbours? Drop us a line.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a
              href="mailto:attiofficial.in@gmail.com"
              className="bg-primary/20 border border-primary/40 text-accent px-8 py-4 rounded-full font-bold text-xl flex items-center gap-4 hover:bg-primary hover:border-primary transition-all shadow-xl hover:-translate-y-1 group"
            >
              <div className="bg-primary p-2 rounded-full text-accent group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              attiofficial.in@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-lg"
        >
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-accent/60 uppercase tracking-widest pl-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-accent/20 px-2 py-3 outline-none focus:border-highlight transition-colors text-accent font-medium text-lg placeholder-transparent"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-accent/60 uppercase tracking-widest pl-2">Phone / Email</label>
              <input 
                type="text" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-accent/20 px-2 py-3 outline-none focus:border-highlight transition-colors text-accent font-medium text-lg placeholder-transparent"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-accent/60 uppercase tracking-widest pl-2">Requirement</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-transparent border-b-2 border-accent/20 px-2 py-3 outline-none focus:border-highlight transition-colors text-accent font-medium text-lg resize-none placeholder-transparent"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-xs font-bold text-accent/60 uppercase tracking-widest pl-2">Budget Range</label>
              <select 
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-accent/20 px-2 py-3 outline-none focus:border-highlight transition-colors text-accent font-medium text-lg appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-dark text-accent/50">Select a budget range</option>
                <option value="Under ₹10k" className="bg-dark text-accent">Under ₹10k</option>
                <option value="₹10k–₹30k" className="bg-dark text-accent">₹10k–₹30k</option>
                <option value="₹30k+" className="bg-dark text-accent">₹30k+</option>
                <option value="Not sure yet" className="bg-dark text-accent">Not sure yet</option>
              </select>
            </div>
            
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-primary text-accent mt-4 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-highlight hover:text-dark transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              {status !== "success" && status !== "submitting" && <Send size={18} />}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
