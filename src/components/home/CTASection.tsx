import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-uppercase-sm text-primary-foreground/70 mb-6 block">
            Start a Project
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
            Let's work together and create something amazing
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss 
            how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background transition-all group"
          >
            <span className="text-sm uppercase tracking-wide font-medium">Get In Touch</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
