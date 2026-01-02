import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Ubynix transformed our outdated website into a modern, user-friendly platform. Their attention to detail and commitment to excellence exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    content: "The mobile app they developed for us has received incredible feedback from our users. Professional team, seamless communication, and outstanding results.",
    author: "Michael Chen",
    role: "Founder, FitLife App",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    content: "Working with Ubynix was a game-changer for our e-commerce business. They delivered a beautiful, high-converting platform ahead of schedule.",
    author: "Emily Rodriguez",
    role: "Marketing Director, EcoStore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            
            <div className="relative overflow-hidden min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute inset-0 translate-x-10"
                  }`}
                >
                  <p className="text-lg md:text-xl leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-display font-semibold">{testimonial.author}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
