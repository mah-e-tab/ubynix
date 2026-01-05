import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Branding", "E-commerce"];

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "A comprehensive analytics dashboard for enterprise clients.",
  },
  {
    id: 2,
    title: "FitLife Mobile App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "Fitness tracking app with AI-powered workout recommendations.",
  },
  {
    id: 3,
    title: "EcoStore Platform",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Sustainable e-commerce platform with carbon footprint tracking.",
  },
  {
    id: 4,
    title: "FinanceHub",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Modern banking interface redesign for a fintech startup.",
  },
  {
    id: 5,
    title: "Luxe Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Complete brand identity for a luxury lifestyle company.",
  },
  {
    id: 6,
    title: "HealthTrack App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description: "Health monitoring application with wearable integration.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <span className="text-uppercase-sm mb-6 block">Our Work</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Projects that{" "}
              <span className="text-primary">inspire</span>{" "}
              and deliver results
            </h1>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wide transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-uppercase-sm mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Have a project in mind?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background transition-all group"
          >
            <span className="text-sm uppercase tracking-wide font-medium">Let's Talk</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
