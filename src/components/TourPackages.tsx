import srisailamImg from "@/assets/srisailam-temple.jpg";
import yadagiriguttaImg from "@/assets/yadagirigutta.jpg";
import warangalImg from "@/assets/warangal.jpg";
import hyderabadImg from "@/assets/hyderabad-sightseeing.jpg";
import tirupatiImg from "@/assets/tirupati.jpg";
import vizagImg from "@/assets/vizag.jpg";
import goaImg from "@/assets/goa.jpg";
import shirdiImg from "@/assets/shirdi.jpg";
import hyderabadCityImg from "@/assets/hyderabad-city.jpg";

const packages = [
  { title: "Hyderabad To Srisailam Jyothirlinga", image: srisailamImg },
  { title: "Yadagirigutta + Swarnagiri Temple", image: yadagiriguttaImg },
  { title: "Hyderabad To Warangal Sightseeing", image: warangalImg },
  { title: "Hyderabad City Sightseeing", image: hyderabadImg },
  { title: "Hyderabad To Tirupati", image: tirupatiImg },
  { title: "Hyderabad To Vizag + Araku", image: vizagImg },
  { title: "Hyderabad To Goa", image: goaImg },
  { title: "Hyderabad To Shirdi", image: shirdiImg },
  { title: "Explore Hyderabad's Grandeur", image: hyderabadCityImg },
];

const TourPackages = () => (
  <section id="packages" className="section-padding bg-muted">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">Tour Packages We Offer</h2>
        <p className="section-subtitle">Popular outstation and pilgrimage tour packages from Hyderabad</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((p) => (
          <a
            key={p.title}
            href="#contact"
            className="group relative rounded-xl overflow-hidden h-64 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-heading text-lg font-semibold text-card">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default TourPackages;
