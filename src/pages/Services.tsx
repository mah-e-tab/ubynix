import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Code2, Smartphone, Palette, ArrowRight, CheckCircle2,
  Globe, ShoppingCart, Database, Layers, Figma, Lightbulb,
  Search, Pencil, Code, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web",
    icon: Code2,
    title: "Web Development",
    description: "We build fast, scalable, and secure web applications using modern technologies and best practices.",
    features: [
      { icon: Globe, text: "Custom Websites & Landing Pages" },
      { icon: ShoppingCart, text: "E-commerce Platforms" },
      { icon: Database, text: "Web Applications & Portals" },
      { icon: Layers, text: "CMS & API Integrations" },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
    features: [
      { icon: Smartphone, text: "iOS & Android Native Apps" },
      { icon: Layers, text: "Cross-Platform Development" },
      { icon: Database, text: "Offline-First Architecture" },
      { icon: Rocket, text: "App Store Optimization" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality to create memorable experiences.",
    features: [
      { icon: Search, text: "User Research & Analysis" },
      { icon: Figma, text: "Wireframing & Prototyping" },
      { icon: Palette, text: "Visual Design & Branding" },
      { icon: Lightbulb, text: "Design Systems" },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
  },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into understanding your business goals, target audience, and project requirements.",
  },
  {
    step: "02",
    icon: Pencil,
    title: "Design",
    description: "Our designers create intuitive and visually stunning interfaces that align with your brand.",
  },
  {
    step: "03",
    icon: Code,
    title: "Development",
    description: "Our engineers bring designs to life using cutting-edge technologies and best practices.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deploy",
    description: "We launch your product and provide ongoing support to ensure continued success.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium mb-2 block">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Solutions That <span className="gradient-text">Transform</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we offer comprehensive digital solutions 
              tailored to your unique business needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature.text} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <service.icon className="h-32 w-32 text-primary/50" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl gradient-bg opacity-50 blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium mb-2 block">Our Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              How We <span className="gradient-text">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  <span className="font-display text-4xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center my-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
