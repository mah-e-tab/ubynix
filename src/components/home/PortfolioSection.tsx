import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: ["Design", "Development"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "FitLife Mobile App",
    category: ["Mobile", "UI/UX"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "EcoStore Platform",
    category: ["E-commerce", "Branding"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "FinanceHub",
    category: ["Design", "Marketing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-0">
      {/* Section Header */}
      <div className="container mx-auto px-4">
        <div className="sec-head">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-uppercase-sm mb-4 block">Our Work</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                <span className="text-muted-foreground">Featured</span>
                <br />
                Projects.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 butn-arrow group"
            >
              <span className="text-sm uppercase tracking-wide font-medium">View All</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid - Full Width */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            to="/portfolio"
            className="group relative aspect-[4/3] overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.category.map((cat) => (
                  <span key={cat} className="text-xs uppercase tracking-wider text-muted-foreground">
                    {cat}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
                  {project.title}
                </h3>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* More Projects CTA */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <Link to="/portfolio" className="text-2xl md:text-3xl font-bold text-primary-foreground uppercase hover:opacity-80 transition-opacity">
            {"{ More Projects }"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
