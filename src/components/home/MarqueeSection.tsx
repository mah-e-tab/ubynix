const marqueeItems = [
  "Digital Agency",
  "★",
  "Web Development", 
  "★",
  "Mobile Apps",
  "★",
  "UI/UX Design",
  "★",
  "Branding",
  "★",
];

const MarqueeSection = () => {
  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="flex animate-marquee">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-8 px-8">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase whitespace-nowrap text-muted-foreground/30">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
