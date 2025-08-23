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
      rating: 5,
    },
    {
      name: "Anita Sharma",
      role: "Electrical Engineer, PowerGrid",
      feedback:
        "The team was extremely professional and offered us a custom solution for our control panels. Highly recommend their services.",
      image: client2,
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "CEO, TechnoBuild",
      feedback:
        "Outstanding quality and timely delivery. They exceeded our expectations in every way.",
      image: client3,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">
          What Our <span className="text-orange-500">Clients Say</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{t.feedback}</p>
            </div>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="w-full mx-auto text-left bg-background p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">
            Cable Tray Manufacturers & Suppliers in India
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base">
            Are you looking for a reliable cable tray manufacturer in Bhiwadi,
            Jaipur, Lucknow, Ludhiana, Chandigarh, Kanpur, Bhopal, or Indore?
            Look no further. Our company specializes in designing & manufacturing
            high-quality cable trays, including walkway, raceway, ladder, hot dip
            galvanized, perforated, & GI cable trays. We offer a wide range of
            products, including cable ladders, GI perforated trays, and
            powder-coated cable trays.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mt-4">
            Our cable trays are designed to provide efficient cable management
            solutions for various industries, including electrical,
            telecommunications, and infrastructure. As a leading cable tray
            supplier, we provide competitive pricing, timely delivery, and
            excellent customer service. Whether you're looking for cable tray
            manufacturers near me or a cable tray shop near me, we've got you
            covered. Our products include ladder type cable trays, hot dipped
            galvanized cable trays, and GI raceway cable trays.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mt-4">
            Contact us today to learn more about our cable tray solutions and get
            a quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
