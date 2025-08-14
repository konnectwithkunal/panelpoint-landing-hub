import { Star } from "lucide-react";
import client1 from "@/assets/testimonial1.png";
import client2 from "@/assets/testimonial2.jpeg";
import client3 from "@/assets/testimonial3.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Manager, InfraBuild",
      feedback:
        "JP Shine Electricals provided high-quality cable trays that perfectly fit our project needs. Their delivery was fast and the support was excellent.",
      image: client1,
      rating: 5
    },
    {
      name: "Anita Sharma",
      role: "Electrical Engineer, PowerGrid",
      feedback:
        "The team was extremely professional and offered us a custom solution for our control panels. Highly recommend their services.",
      image: client2,
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "CEO, TechnoBuild",
      feedback:
        "Outstanding quality and timely delivery. They exceeded our expectations in every way.",
      image: client3,
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">
          What Our <span className="text-orange-500">Clients Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-background rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t.role}</p>
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
