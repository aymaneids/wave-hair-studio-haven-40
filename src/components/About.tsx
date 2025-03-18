
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <h2 className="font-tenor text-3xl md:text-4xl text-primary text-center mb-16">
          About Hair Divas
        </h2>
        <Card className="max-w-4xl mx-auto bg-secondary/10 border-primary/10">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Hair Divas Salon, Summersville's premier destination for exceptional hair color services. 
                Our team of skilled stylists specializes in creating beautiful, customized looks that enhance your 
                natural beauty and fit your lifestyle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking for subtle balayage, brilliant blonde, lived-in color, or vibrant fashion shades, 
                our color experts will work with you to achieve the perfect look in our modern, 
                welcoming environment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
