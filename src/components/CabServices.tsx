import outstationImg from "@/assets/outstation-taxi.jpg";
import airportImg from "@/assets/airport-taxi.jpg";
import sightseeingImg from "@/assets/hyderabad-sightseeing.jpg";
import srisailamImg from "@/assets/srisailam-temple.jpg";

const services = [
  { title: "Outstation Taxi", image: outstationImg, description: "Comfortable rides to any destination across India" },
  { title: "Airport Taxi", image: airportImg, description: "Timely airport pickups and drops, 24/7" },
  { title: "Hyderabad Sightseeing", image: sightseeingImg, description: "Explore the city's iconic landmarks" },
  { title: "Srisailam Tour Packages", image: srisailamImg, description: "Sacred pilgrimage to Mallikarjuna Jyothirlinga" },
];

const CabServices = () => (
  <section id="services" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Cab Services</h2>
        <p className="section-subtitle">Choose from our wide range of taxi services tailored for every journey</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden h-48">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{s.description}</p>
              <a href="#contact" className="font-body text-sm font-semibold text-primary hover:underline">
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CabServices;
