import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, Smartphone, Palette, TrendingUp, Database, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance, scalability, and user experience.",
    features: ["Custom Web Apps", "E-commerce Solutions", "CMS Development", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to boost your online presence and drive qualified traffic to your business.",
    features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
  },
  {
    icon: Database,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and solutions to power your applications with reliability and performance.",
    features: ["AWS/GCP/Azure", "DevOps", "CI/CD Pipelines", "Monitoring"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Encryption"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <span className="text-uppercase-sm mb-6 block">Our Services</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Solutions that{" "}
              <span className="text-primary">transform</span>{" "}
              your business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              From concept to launch, we provide comprehensive digital solutions 
              tailored to your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 rounded-2xl flex flex-col min-h-[450px] transition-all duration-300 ${
                  index === 1 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <service.icon className={`h-10 w-10 mb-8 ${index === 1 ? "" : "text-primary"}`} />
                
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className={`mb-8 ${index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${index === 1 ? "bg-primary-foreground" : "bg-primary"}`} />
                      <span className={index === 1 ? "text-primary-foreground/90" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-3 group/link ${
                    index === 1 ? "text-primary-foreground" : ""
                  }`}
                >
                  <span className="text-sm uppercase tracking-wide font-medium">Learn More</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Let's discuss your project
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background transition-all group"
          >
            <span className="text-sm uppercase tracking-wide font-medium">Get Started</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
