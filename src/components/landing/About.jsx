import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Licensed and IRS-enrolled agents with 15+ years of experience",
  "Personalized service — we treat every client like family",
  "Year-round availability, not just during tax season",
  "Transparent pricing with no hidden fees",
  "Guaranteed maximum refund on every return",
  "Secure, confidential handling of all financial data",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#D4A853]/10 rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
              alt="Our team"
              className="relative rounded-3xl w-full object-cover aspect-[4/3] shadow-lg"
            />
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#0F1B2D] rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-[#D4A853] font-bold text-2xl">15+</p>
                  <p className="text-white/60 text-xs mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-[#D4A853] font-bold text-2xl">500+</p>
                  <p className="text-white/60 text-xs mt-1">Clients Served</p>
                </div>
                <div className="text-center">
                  <p className="text-[#D4A853] font-bold text-2xl">98%</p>
                  <p className="text-white/60 text-xs mt-1">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-[#D4A853] font-bold text-2xl">$2M+</p>
                  <p className="text-white/60 text-xs mt-1">Refunds Secured</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#D4A853] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1B2D] mt-4 leading-tight">
              Your Finances Deserve
              <span className="text-[#D4A853]"> Expert Care</span>
            </h2>
            <p className="text-gray-500 text-lg mt-6 leading-relaxed">
              At Dominion Group Inc, we understand that taxes and accounting can feel overwhelming.
              That's why we combine deep expertise with a personal touch — making complex financial 
              matters simple and stress-free for every client.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
