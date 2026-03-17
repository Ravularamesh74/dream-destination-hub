import { Car } from "lucide-react";

const fleet = [
  { name: "Swift DZire", seats: "4+1 Seats", icon: Car },
  { name: "Toyota Etios", seats: "4+1 Seats", icon: Car },
  { name: "Maruti Ertiga", seats: "6+1 Seats", icon: Car },
  { name: "Toyota Innova", seats: "7+1 Seats", icon: Car },
  { name: "Innova Crysta", seats: "7+1 Seats", icon: Car },
  { name: "Tempo Traveller", seats: "12 to 28 Seats", icon: Car },
];

const FleetSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Awesome Fleet</h2>
        <p className="section-subtitle">Well-maintained vehicles with experienced drivers for your comfort</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {fleet.map((v) => (
          <div
            key={v.name}
            className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <v.icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{v.name}</h4>
            <p className="font-body text-xs text-muted-foreground">{v.seats}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
