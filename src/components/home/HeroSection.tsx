import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Crafting Digital Excellence</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transforming Ideas into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We build innovative web and mobile solutions that drive business growth, 
            enhance user experiences, and bring your vision to life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="px-8">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Code2 className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Web Dev</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Palette className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
