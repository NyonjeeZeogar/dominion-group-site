import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import LeadForm from "./LeadForm.jsx";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    lines: ["Brooklyn Park, Minnesota"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(763) 555-0100"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@dominiongroupinc.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon–Fri: 9AM – 6PM", "Sat: 10AM – 3PM"],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A853] text-sm font-semibold uppercase tracking-widest">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B2D] mt-4">
            Ready to Take Control of Your Taxes?
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Fill out the form below and one of our experts will contact you within 24 hours to schedule your free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F1B2D] flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-[#D4A853]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F1B2D] text-sm">{info.title}</p>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-gray-500 text-sm mt-0.5">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80"
                alt="Brooklyn Park location"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10"
          >
            <h3 className="text-xl font-bold text-[#0F1B2D] mb-2">
              Request Your Free Consultation
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Tell us about your needs and we'll match you with the right expert.
            </p>
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
