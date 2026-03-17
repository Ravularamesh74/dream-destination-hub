import { Phone, MapPin, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm py-2 px-4 md:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
      <div className="flex items-center gap-4">
        <a href="tel:+919949373579" className="flex items-center gap-1 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" /> Ph: 99493 73579
        </a>
        <a href="https://wa.me/+919949375649" className="flex items-center gap-1 hover:text-primary transition-colors">
          W.A: 9949375649
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> Kukatpally, Hyderabad, Telangana
        </span>
        <a href="mailto:info@mallikarjunatravels.in" className="hidden md:flex items-center gap-1 hover:text-primary transition-colors">
          <Mail className="w-3.5 h-3.5" /> info@mallikarjunatravels.in
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
