
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const categories = [
  { 
    name: "Balayage", 
    images: [
      "/gallery/cuts-1.jpg", 
      "/gallery/cuts-2.jpg", 
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format", 
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format"
    ] 
  },
  { 
    name: "Blonding", 
    images: [
      "/gallery/color-1.jpg", 
      "/gallery/color-2.jpg", 
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&auto=format", 
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format"
    ] 
  },
  { 
    name: "Lived-in Color", 
    images: [
      "/gallery/style-1.jpg", 
      "/gallery/style-2.jpg", 
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&auto=format", 
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format"
    ] 
  },
  { 
    name: "Vivids", 
    images: [
      "/gallery/style-1.jpg", 
      "/gallery/style-2.jpg", 
      "https://images.unsplash.com/photo-1589285874274-74db86ec8936?w=800&auto=format", 
      "https://images.unsplash.com/photo-1588670312917-b2e2ce6e1e03?w=800&auto=format"
    ] 
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container px-4">
          <h1 className="font-tenor text-3xl md:text-5xl text-primary text-center mb-16">
            Our Work
          </h1>
          {categories.map((category) => (
            <div key={category.name} className="mb-16">
              <h2 className="font-tenor text-2xl md:text-3xl mb-8">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={image}
                      alt={`${category.name} example ${index + 1}`}
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
