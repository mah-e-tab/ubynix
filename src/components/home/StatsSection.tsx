import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "4.9", label: "Client Reviews" },
  { value: "2k+", label: "Product Launch" },
  { value: "35+", label: "Team Members" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="text-uppercase-sm mb-8 block">{stat.label}</span>
              <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
