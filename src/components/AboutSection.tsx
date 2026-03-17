import hyderabadCity from "@/assets/hyderabad-city.jpg";

const AboutSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img src={hyderabadCity} alt="Hyderabad city view" className="w-full h-80 object-cover" />
      </div>
      <div>
        <h2 className="section-title text-left">Best Outstation Cab Service from Hyderabad</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Mallikarjuna Travels offers outstation cab service in Hyderabad at the most affordable prices. We have been serving customers since 2006 with quality, reliability, and 24/7 availability.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          We offer a complete solution for Hyderabad Package Tours, Srisailam Tours, Hyderabad Sightseeing Tour, Airport Transfers, and Economy to Luxury Cabs with well-experienced and trained drivers.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
