import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, Users, Target, Award, Lightbulb } from "lucide-react";

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovative Creativity",
    description: "We merge art and technology to create solutions that break the mold and capture attention.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work closely with our clients, treating their goals as our own mission.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every project is measured by the impact it creates for our clients' businesses.",
  },
  {
    icon: Award,
    title: "Excellence in Craft",
    description: "We obsess over the details, ensuring every pixel and line of code is perfect.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <span className="text-uppercase-sm mb-6 block">About Us</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              We are a digital agency focused on{" "}
              <span className="text-primary">creating impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Founded in 2018, we've helped over 150+ clients transform their 
              digital presence and achieve remarkable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary">150+</span>
              <p className="text-muted-foreground mt-2">Projects</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary">80+</span>
              <p className="text-muted-foreground mt-2">Clients</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary">8+</span>
              <p className="text-muted-foreground mt-2">Years</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary">25+</span>
              <p className="text-muted-foreground mt-2">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="sec-head">
            <span className="text-uppercase-sm mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase">
              <span className="text-muted-foreground">What</span> Drives Us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border">
                <value.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="sec-head">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <span className="text-uppercase-sm mb-4 block">Our Team</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase">
                  <span className="text-muted-foreground">Meet</span> The Crew.
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Ready to work together?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background transition-all group"
          >
            <span className="text-sm uppercase tracking-wide font-medium">Get In Touch</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
