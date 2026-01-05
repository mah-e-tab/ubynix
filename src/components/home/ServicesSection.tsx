import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Branding Design & Identity",
    description: "Crafting engaging and functional digital solutions, tailored to enhance user interaction and brand recognition.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Website & Digital Design",
    description: "Creating modern, responsive websites and digital experiences that convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    highlight: true,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile applications that deliver seamless user experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="sec-head">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-3">
              <span className="text-uppercase-sm">Services</span>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                <span className="text-muted-foreground">Our</span>
                <br />
                Capabilities.
              </h2>
            </div>
            <div className="md:col-span-3 flex md:justify-end">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 butn-arrow group"
              >
                <span className="text-sm uppercase tracking-wide font-medium">See All</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group p-8 rounded-2xl flex flex-col justify-between min-h-[400px] transition-all duration-300 ${
                service.highlight 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {/* Icon/Image */}
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-8">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-medium mb-4">{service.title}</h3>
                <p className={`mb-8 ${service.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-3 group/link ${
                    service.highlight ? "text-primary-foreground" : ""
                  }`}
                >
                  <span className="text-sm uppercase tracking-wide font-medium">Know More</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
