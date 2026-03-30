import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const serviceOptions = [
  "Individual Tax Preparation",
  "Business Tax Services",
  "Bookkeeping",
  "Tax Planning",
  "IRS Representation",
  "Payroll Services",
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    filing_type: "",
    services_needed: [],
    annual_income_range: "",
    is_business_owner: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(service)
        ? prev.services_needed.filter((s) => s !== service)
        : [...prev.services_needed, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await base44.entities.Lead.create({
      ...formData,
      source: "website",
      status: "new",
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F1B2D] mb-3">Thank You!</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We've received your information and a member of our team will reach out within 24 hours
          to schedule your free consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name, Email, Phone */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Full Name *</Label>
          <Input
            required
            placeholder="John Doe"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="h-12 rounded-xl border-gray-200 focus:border-[#D4A853] focus:ring-[#D4A853]"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Email Address *</Label>
          <Input
            required
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12 rounded-xl border-gray-200 focus:border-[#D4A853] focus:ring-[#D4A853]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Phone Number *</Label>
          <Input
            required
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-12 rounded-xl border-gray-200 focus:border-[#D4A853] focus:ring-[#D4A853]"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Filing Type</Label>
          <Select
            value={formData.filing_type}
            onValueChange={(value) => setFormData({ ...formData, filing_type: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-gray-200">
              <SelectValue placeholder="Select filing type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="both">Both Individual & Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Income Range & Business Owner */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Annual Income Range</Label>
          <Select
            value={formData.annual_income_range}
            onValueChange={(value) => setFormData({ ...formData, annual_income_range: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-gray-200">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_50k">Under $50,000</SelectItem>
              <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k_250k">$100,000 - $250,000</SelectItem>
              <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
              <SelectItem value="over_500k">$500,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex items-end">
          <div className="flex items-center gap-3 h-12 px-4 rounded-xl border border-gray-200 w-full">
            <Checkbox
              id="business_owner"
              checked={formData.is_business_owner}
              onCheckedChange={(checked) => setFormData({ ...formData, is_business_owner: checked })}
            />
            <Label htmlFor="business_owner" className="text-gray-600 cursor-pointer text-sm">
              I am a business owner
            </Label>
          </div>
        </div>
      </div>

      {/* Services Needed */}
      <div className="space-y-3">
        <Label className="text-gray-700 font-medium">Services You're Interested In</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceOptions.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleServiceToggle(service)}
              className={`text-left px-4 py-3 rounded-xl border text-sm transition-all duration-300 ${
                formData.services_needed.includes(service)
                  ? "border-[#D4A853] bg-[#D4A853]/10 text-[#0F1B2D] font-medium"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label className="text-gray-700 font-medium">Additional Details</Label>
        <Textarea
          placeholder="Tell us more about your tax or accounting needs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-[100px] rounded-xl border-gray-200 focus:border-[#D4A853] focus:ring-[#D4A853]"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D4A853] hover:bg-[#B8912E] text-[#0F1B2D] font-bold h-14 rounded-xl text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Request Free Consultation
          </>
        )}
      </Button>

      <p className="text-center text-gray-400 text-xs">
        Your information is 100% secure and will never be shared with third parties.
      </p>
    </form>
  );
}
