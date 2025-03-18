
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4">
        <h2 className="font-tenor text-3xl md:text-4xl text-primary text-center mb-16">
          Visit Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:304-872-1234"
              className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-lg hover:bg-background/80 transition-colors"
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <span className="text-lg">304-872-1234</span>
            </a>
            <a
              href="https://maps.google.com/?q=123+Main+Street,+Summersville,+WV+26651"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-lg hover:bg-background/80 transition-colors"
            >
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <span className="text-lg text-center">
                123 Main Street<br />
                Summersville, WV 26651
              </span>
            </a>
            <a
              href="mailto:info@hairdivas.com"
              className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-lg hover:bg-background/80 transition-colors"
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <span className="text-lg">info@hairdivas.com</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://instagram.com/hairdivas" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://facebook.com/hairdivas" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Facebook
              </a>
            </Button>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Hair Divas Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25231.968939041!2d-80.85834!3d38.28118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884f12d3bda9a013%3A0xc9b3962ea752e4e9!2sSummersville%2C%20WV%2026651!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
