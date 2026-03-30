import React from "react";

const footerLinks = [
  {
    title: "Services",
    links: ["Individual Tax Prep", "Business Taxes", "Bookkeeping", "Tax Planning", "IRS Representation", "Payroll"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Tax Tips Blog", "Tax Deadlines", "Document Checklist", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1320] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A853] to-[#B8912E] flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">Dominion Group</span>
                <span className="text-[#D4A853] text-xs block -mt-1 tracking-widest uppercase">Inc</span>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed mb-6">
              Professional tax preparation and accounting services serving the Brooklyn Park, Minnesota community 
              and beyond for over 15 years.
            </p>
            <div className="flex gap-4">
              {["Facebook", "LinkedIn", "Instagram"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4A853]/20 hover:border-[#D4A853]/30 transition-all cursor-pointer"
                >
                  <span className="text-white/60 text-xs font-medium">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <span className="text-white/40 hover:text-[#D4A853] transition-colors text-sm cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Dominion Group Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/30 hover:text-white/60 text-sm cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/30 hover:text-white/60 text-sm cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
