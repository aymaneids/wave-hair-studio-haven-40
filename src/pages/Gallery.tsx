
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Haircuts", images: ["/gallery/cuts-1.jpg", "/gallery/cuts-2.jpg"] },
  { name: "Color", images: ["/gallery/color-1.jpg", "/gallery/color-2.jpg"] },
  { name: "Styling", images: ["/gallery/style-1.jpg", "/gallery/style-2.jpg"] },
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
