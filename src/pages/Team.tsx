
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const stylists = [
  {
    name: "Jessica Adams",
    photo: "/stylists/sarah.jpg",
    specialties: ["Color Specialist", "Balayage Expert"],
    bio: "With over 10 years of experience, Jessica specializes in creating stunning balayage and dimensional color.",
    instagram: "jessicahairdivas",
  },
  {
    name: "Olivia Taylor",
    photo: "/stylists/michael.jpg",
    specialties: ["Blonding", "Vivids"],
    bio: "Olivia is passionate about creating beautiful blonde transformations and vibrant fashion colors.",
    instagram: "oliviahairdivas",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container px-4">
          <h1 className="font-tenor text-3xl md:text-5xl text-primary text-center mb-16">
            Meet the Talented Stylists at Hair Divas Salon
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylists.map((stylist) => (
              <Card key={stylist.name} className="overflow-hidden">
                <img
                  src={stylist.photo}
                  alt={stylist.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h2 className="font-tenor text-2xl mb-2">{stylist.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stylist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-sm bg-secondary/50 text-secondary-foreground px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{stylist.bio}</p>
                  <div className="flex gap-4">
                    <Button className="flex-1">Book Now</Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={`https://instagram.com/${stylist.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
