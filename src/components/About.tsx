
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <h2 className="font-tenor text-3xl md:text-4xl text-primary text-center mb-16">
          About WAVE
        </h2>
        <Card className="max-w-4xl mx-auto bg-secondary/10 border-primary/10">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to WAVE Hair Studio, Beaver Dam's premier destination for exceptional hair services. 
                Our unique hybrid salon model brings together talented independent stylists and dedicated 
                staff members, offering you the perfect blend of creativity and expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking for a fresh cut, vibrant color, or a complete style transformation, 
                our experienced team is here to help you achieve your hair goals in our modern, 
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
