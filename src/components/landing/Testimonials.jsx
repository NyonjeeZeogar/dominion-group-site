import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Small Business Owner",
    text: "Dominion Group has been handling my business and personal taxes for 5 years. They found deductions I never knew existed and saved me thousands. Absolutely the best in Brooklyn Park!",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "Freelance Consultant",
    text: "As a freelancer, my taxes were always complicated. The team here made it so easy and stress-free. My refund was significantly higher than what I got with my previous preparer.",
    rating: 5,
  },
  {
    name: "David & Lisa Park",
    role: "Family Filing",
    text: "We've been coming here since they opened. The personalized attention and care they show every client is rare. They truly treat you like family. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#0F1B2D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#D4A853] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Don't just take our word for it — hear from the individuals and businesses we've helped.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#D4A853]/30 transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-[#D4A853]/30 mb-4" />

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#D4A853] fill-[#D4A853]" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A853] to-[#B8912E] flex items-center justify-center">
                  <span className="text-[#0F1B2D] font-bold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
