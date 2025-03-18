
import Navigation from "@/components/Navigation";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container px-4">
          <h1 className="font-tenor text-3xl md:text-5xl text-primary text-center mb-16">
            Get in Touch
          </h1>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-tenor text-2xl mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a
                    href="tel:304-872-1234"
                    className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    304-872-1234
                  </a>
                  <a
                    href="https://maps.google.com/?q=123+Main+Street,+Summersville,+WV+26651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-lg hover:text-primary transition-colors"
                  >
                    <MapPin className="h-5 w-5 mt-1" />
                    <span>
                      123 Main Street<br />
                      Summersville, WV 26651
                    </span>
                  </a>
                  <a
                    href="mailto:info@hairdivas.com"
                    className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    info@hairdivas.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="font-tenor text-2xl mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tuesday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday - Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="group" asChild>
              <a
                href="https://instagram.com/hairdivas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a
                href="https://facebook.com/hairdivas"
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </section>
    </div>
  );
};

export default Contact;
