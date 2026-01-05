import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="sec-head">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-uppercase-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase">
                <span className="text-muted-foreground">Client</span> Feedback.
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl">
          <div className="relative overflow-hidden min-h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-10"
                }`}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-12">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
