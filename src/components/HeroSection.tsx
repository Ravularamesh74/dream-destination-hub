import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => (
  <section id="home" className="relative h-[70vh] md:h-[85vh] overflow-hidden">
    <img
      src={heroBanner}
      alt="Scenic temple on hilltop at sunset"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-4 animate-fade-in-up">
        Welcome To Mallikarjuna Travels
      </h1>
      <p className="font-body text-lg md:text-xl text-card/90 max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Best Outstation Cab Service from Hyderabad — Reliable, Affordable & 24/7 Available
      </p>
      <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="tel:+919949373579"
          className="bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/+919949375649"
          className="bg-card text-foreground font-body font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
