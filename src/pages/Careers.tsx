
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const benefits = [
  "Flexible scheduling options",
  "Marketing support",
  "Prime location in Beaver Dam",
  "Modern, well-maintained facilities",
  "Collaborative, supportive environment",
  "Ongoing education opportunities",
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container px-4">
          <h1 className="font-tenor text-3xl md:text-5xl text-primary text-center mb-16">
            Join the WAVE Hair Studio Team!
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-tenor text-2xl mb-6">Benefits of Joining Us</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="font-tenor text-2xl mb-6">Interested?</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented stylists to join our team. Whether you're 
                  interested in booth rental or employment opportunities, we'd love to hear from you.
                </p>
                <Button className="w-full" asChild>
                  <a href="mailto:careers@wavehair.com">
                    <Mail className="mr-2" />
                    Contact Us About Opportunities
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
