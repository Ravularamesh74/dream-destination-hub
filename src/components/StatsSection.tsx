import { Car, Users, MapPin, CalendarDays } from "lucide-react";

const stats = [
  { icon: Car, value: "21+", label: "Fleet of Cars" },
  { icon: Users, value: "2k+", label: "Happy Customers" },
  { icon: MapPin, value: "42+", label: "Outstation Routes" },
  { icon: CalendarDays, value: "4+", label: "Years in Business" },
];

const StatsSection = () => (
  <section className="bg-primary py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
        Achievements We Are Humbled With
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <s.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
              {s.value}
            </div>
            <p className="font-body text-sm text-primary-foreground/80">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
