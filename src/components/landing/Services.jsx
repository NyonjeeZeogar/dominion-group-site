import React from "react";
import { motion } from "framer-motion";
import { FileText, Building2, Calculator, PiggyBank, BarChart3, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Individual Tax Prep",
    description: "Expert preparation for personal returns. We maximize deductions and ensure full compliance.",
    features: ["Federal & State Returns", "Itemized Deductions", "E-Filing"],
  },
  {
    icon: Building2,
    title: "Business Tax Services",
    description: "Comprehensive tax solutions for businesses of all sizes, from sole proprietors to corporations.",
    features: ["Corporate Returns", "Partnership Filing", "Quarterly Estimates"],
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description: "Keep your financial records organized and accurate throughout the year with our bookkeeping services.",
    features: ["Monthly Reconciliation", "Financial Statements", "Payroll Processing"],
  },
  {
    icon: PiggyBank,
    title: "Tax Planning",
    description: "Strategic tax planning to minimize your tax liability and maximize savings for the future.",
    features: ["Year-Round Strategy", "Retirement Planning", "Tax Optimization"],
  },
  {
    icon: BarChart3,
    title: "IRS Representation",
    description: "Expert representation if you're facing an audit, back taxes, or any IRS-related issues.",
    features: ["Audit Defense", "Back Tax Resolution", "Payment Plans"],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Full-service payroll management including tax withholdings, filings, and compliance.",
    features: ["Direct Deposit", "Tax Withholding", "W-2 & 1099 Processing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#D4A853] text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B2D] mt-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            From individual tax returns to complete business accounting, we've got every aspect of your finances covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4A853]/30 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0F1B2D] group-hover:bg-[#D4A853] transition-colors duration-500 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#D4A853] group-hover:text-[#0F1B2D] transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-bold text-[#0F1B2D] mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-[#D4A853] font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
