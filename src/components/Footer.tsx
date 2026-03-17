import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const quickLinks = [
  "Airport Cabs", "Outstation Cabs", "Sightseeing Cabs",
  "Srisailam Tour Packages", "About Us", "Contact",
];

const routesCol1 = [
  "Hyderabad To Vijayawada", "Hyderabad To Guntur", "Hyderabad To Nellore",
  "Hyderabad To Tirupati", "Hyderabad To Vizag", "Hyderabad To Rajahmundry",
  "Hyderabad To Ongole", "Hyderabad To Warangal",
];

const routesCol2 = [
  "Hyderabad To Shirdi", "Hyderabad To Bangalore", "Hyderabad To Chennai",
  "Hyderabad To Goa", "Hyderabad To Pune", "Hyderabad To Mumbai",
  "Hyderabad To Nagpur", "Hyderabad To Srisailam",
];

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="max-w-7xl mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-card mb-4">
            Mallikarjuna <span className="text-primary">Travels</span>
          </h3>
          <p className="font-body text-sm leading-relaxed mb-4">
            Best outstation cab service from Hyderabad with 24/7 availability, experienced drivers, and affordable prices.
          </p>
          <div className="space-y-2 text-sm">
            <a href="tel:+919949373579" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 99493 73579
            </a>
            <a href="https://wa.me/+919949375649" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" /> 99493 75649
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" /> Kukatpally, Hyderabad
            </div>
            <a href="mailto:info@mallikarjunatravels.in" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> info@mallikarjunatravels.in
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-card mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#contact" className="font-body text-sm hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Routes Col1 */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-card mb-4">Popular Routes</h4>
          <ul className="space-y-2">
            {routesCol1.map((r) => (
              <li key={r}>
                <a href="#contact" className="font-body text-sm hover:text-primary transition-colors">{r}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Routes Col2 */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-card mb-4">More Routes</h4>
          <ul className="space-y-2">
            {routesCol2.map((r) => (
              <li key={r}>
                <a href="#contact" className="font-body text-sm hover:text-primary transition-colors">{r}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-footer-foreground/20 pt-6 text-center">
        <p className="font-body text-sm">© 2024 Mallikarjuna Travels. All rights reserved.</p>
      </div>
    </div>

    {/* Floating action buttons */}
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919949373579"
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/+919949375649"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  </footer>
);

export default Footer;
