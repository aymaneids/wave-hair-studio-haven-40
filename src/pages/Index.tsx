
import { Scissors, Palette, Heart, Star, Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const services = [
  {
    title: 'Haircuts',
    description: 'Precision cuts tailored to your style',
    icon: Scissors,
  },
  {
    title: 'Color',
    description: 'Expert color and highlights',
    icon: Palette,
  },
  {
    title: 'Styling',
    description: 'Special occasion and everyday styling',
    icon: Heart,
  },
  {
    title: 'Treatments',
    description: 'Nourishing hair treatments',
    icon: Star,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 pt-16 text-center fade-in">
          <h1 className="font-tenor text-4xl md:text-6xl text-primary mb-4">
            WAVE Hair Studio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your Destination for Beautiful Hair in Beaver Dam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:920-319-9335">Book Now</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/team">Meet Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container px-4">
          <h2 className="font-tenor text-3xl md:text-4xl text-primary text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow slide-in"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-tenor text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-tenor text-3xl md:text-4xl text-primary mb-8">
              Visit Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <a
                href="tel:920-319-9335"
                className="flex flex-col items-center p-4 hover:text-primary transition-colors"
              >
                <Phone className="w-6 h-6 mb-2" />
                <span>920-319-9335</span>
              </a>
              <a
                href="https://maps.google.com/?q=713+Park+Ave,+Suite+C,+Beaver+Dam,+Wisconsin+53933"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 hover:text-primary transition-colors"
              >
                <MapPin className="w-6 h-6 mb-2" />
                <span>713 Park Ave, Suite C</span>
                <span>Beaver Dam, WI 53933</span>
              </a>
              <a
                href="mailto:contact@wavehair.com"
                className="flex flex-col items-center p-4 hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6 mb-2" />
                <span>contact@wavehair.com</span>
              </a>
            </div>
            {/* Map will be added in future iteration */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
