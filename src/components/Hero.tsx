
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/hero-salon.jpg')] bg-cover bg-center"
        style={{ opacity: 0.15 }}
      />
      
      <div className="container px-4 py-24 relative z-10 text-center fade-in">
        <h1 className="font-tenor text-4xl md:text-6xl lg:text-7xl text-primary mb-6">
          WAVE Hair Studio
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your Destination for Beautiful Hair in Beaver Dam
        </p>
        <p className="text-lg mb-12 max-w-xl mx-auto text-muted-foreground/90">
          Expert Stylists, Personalized Service, Stunning Results
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base" asChild>
            <a href="tel:920-319-9335">Call Us</a>
          </Button>
          <Button size="lg" variant="secondary" className="text-base" asChild>
            <Link to="/team">Meet Our Team</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Book Online
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
