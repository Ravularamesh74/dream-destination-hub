import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/+919949375649?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch with Us Anytime!</h2>
          <p className="section-subtitle">We're available 24/7 on phone and WhatsApp</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <a
              href="tel:+919949373579"
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Call Us</p>
                <p className="font-heading text-xl font-semibold text-foreground">99493 73579</p>
              </div>
            </a>
            <a
              href="https://wa.me/+919949375649"
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-heading text-xl font-semibold text-foreground">99493 75649</p>
              </div>
            </a>
            <div className="bg-card rounded-xl p-6 shadow-md">
              <p className="font-body text-muted-foreground leading-relaxed">
                For your travel needs, we are available 24 hours on phone and WhatsApp. We are best known for our service and quick response with over 4 years of experience in the industry.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-md space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
