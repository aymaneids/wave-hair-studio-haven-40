
import { Scissors, Palette, Heart, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Haircuts",
    description: "Precision cuts tailored to your style",
    icon: Scissors,
  },
  {
    title: "Color",
    description: "Expert color and highlights",
    icon: Palette,
  },
  {
    title: "Styling",
    description: "Special occasion and everyday styling",
    icon: Heart,
  },
  {
    title: "Treatments",
    description: "Nourishing hair treatments",
    icon: Star,
  },
  {
    title: "Extensions",
    description: "Length and volume solutions",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4">
        <h2 className="font-tenor text-3xl md:text-4xl text-primary text-center mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="text-center">
                  <service.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-tenor text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
