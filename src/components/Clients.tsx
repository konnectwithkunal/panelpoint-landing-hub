import client1 from "@/assets/testimonial1.png";
import client2 from "@/assets/testimonial1.png";
import client3 from "@/assets/testimonial1.png";
import client4 from "@/assets/testimonial1.png";

const Clients = () => {
  const logos = [client1, client2, client3, client4];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="text-accent">Clients</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex justify-center">
              <img src={logo} alt={`Client ${idx + 1}`} className="h-16 object-contain grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
