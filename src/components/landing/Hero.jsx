import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F1B2D]">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80')] bg-cover bg-center opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-[#D4A853]" />
              <span className="text-[#D4A853] text-sm font-medium">Brooklyn Park's Trusted Tax Experts</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Maximize Your
              <span className="block text-[#D4A853] mt-2">Tax Returns.</span>
              <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2">Minimize Your Stress.</span>
            </h1>

            <p className="text-white/60 text-lg mt-8 max-w-lg leading-relaxed">
              Professional tax preparation and accounting services for individuals and businesses. 
              Let our experts handle the numbers while you focus on what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#D4A853] hover:bg-[#B8912E] text-[#0F1B2D] font-bold px-8 py-6 rounded-full text-base group"
              >
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-full text-base"
              >
                View Our Services
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { icon: Shield, label: "IRS Certified", sub: "Enrolled Agents" },
                { icon: TrendingUp, label: "15+ Years", sub: "Of Experience" },
                { icon: Star, label: "500+", sub: "Happy Clients" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{badge.label}</p>
                    <p className="text-white/40 text-xs">{badge.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A853]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 p-10">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
                  alt="Tax consulting"
                  className="rounded-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-lg">$4,200</p>
                      <p className="text-gray-500 text-xs">Avg. Client Refund</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
