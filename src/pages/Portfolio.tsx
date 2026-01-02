import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "E-commerce"];

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: "Web Development",
    client: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "A comprehensive analytics dashboard for enterprise clients with real-time data visualization.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "FitLife Mobile App",
    category: "Mobile Apps",
    client: "FitLife Health",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "Fitness tracking app with AI-powered workout recommendations and social features.",
    technologies: ["React Native", "Firebase", "TensorFlow"],
  },
  {
    id: 3,
    title: "EcoStore Platform",
    category: "E-commerce",
    client: "EcoStore Global",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly shipping.",
    technologies: ["Next.js", "Stripe", "Shopify"],
  },
  {
    id: 4,
    title: "FinanceHub Redesign",
    category: "UI/UX Design",
    client: "FinanceHub Corp",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Modern banking interface redesign focused on user experience and accessibility.",
    technologies: ["Figma", "Principle", "React"],
  },
  {
    id: 5,
    title: "CloudSync Platform",
    category: "Web Development",
    client: "CloudSync Ltd",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    description: "Enterprise cloud storage solution with advanced collaboration features.",
    technologies: ["Vue.js", "Go", "AWS"],
  },
  {
    id: 6,
    title: "TravelMate App",
    category: "Mobile Apps",
    client: "TravelMate Inc",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    description: "Travel planning app with AI itinerary builder and local recommendations.",
    technologies: ["Flutter", "Node.js", "MongoDB"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium mb-2 block">Our Portfolio</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest work and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "gradient-bg text-white" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-secondary text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's bring your vision to life. Get in touch to discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
