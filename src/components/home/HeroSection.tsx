import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="mb-8 animate-fade-up">
            <span className="text-uppercase-sm">Digital Agency & IT Solutions</span>
          </div>

          {/* Main Headline - Mivon style large text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We craft digital{" "}
            <span className="text-primary">experiences</span>{" "}
            that inspire and{" "}
            <span className="text-primary">transform</span>{" "}
            businesses
          </h1>

          {/* Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              We build bold identities that speak your story visually and verbally, 
              from websites to mobile apps, we design experiences that are beautiful and functional.
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 butn-arrow group"
            >
              <span className="text-sm uppercase tracking-wide font-medium">Start Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-border to-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
