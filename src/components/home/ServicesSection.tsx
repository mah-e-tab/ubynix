import { Link } from "react-router-dom";
import { Code2, Smartphone, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
    features: ["Responsive Design", "E-commerce", "Web Applications"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    features: ["iOS & Android", "Cross-Platform", "App Store Ready"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
