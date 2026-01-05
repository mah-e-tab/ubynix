import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <span className="text-uppercase-sm mb-6 block">Contact</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Let's create something{" "}
              <span className="text-primary">amazing</span>{" "}
              together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Have a project in mind? We'd love to hear about it. Drop us a line 
              and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
              
              <div className="space-y-8 mb-12">
                <a href="mailto:hello@ubynix.com" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <Mail className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="text-uppercase-sm block mb-1">Email</span>
                    <span className="text-lg">hello@ubynix.com</span>
                  </div>
                </a>
                
                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <Phone className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="text-uppercase-sm block mb-1">Phone</span>
                    <span className="text-lg">+1 (234) 567-890</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-uppercase-sm block mb-1">Location</span>
                    <span className="text-lg">San Francisco, CA</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-uppercase-sm mb-4 block">Follow Us</span>
                <div className="flex gap-4">
                  {["LinkedIn", "Twitter", "Instagram", "Dribbble"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-uppercase-sm mb-2 block">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-uppercase-sm mb-2 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-uppercase-sm mb-2 block">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="text-uppercase-sm mb-2 block">Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-card">Select Budget</option>
                      <option value="5k-10k" className="bg-card">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-card">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-card">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-card">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-uppercase-sm mb-2 block">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all group disabled:opacity-50"
                >
                  <span className="text-sm uppercase tracking-wide font-medium">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
