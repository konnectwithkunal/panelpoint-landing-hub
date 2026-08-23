"use client";
import client1 from "@/assets/testimonial1.png";
import client2 from "@/assets/testimonial1.png";
import client3 from "@/assets/testimonial1.png";
import client4 from "@/assets/testimonial1.png";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [client1, client2, client3, client4];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Our <span className="text-accent">Clients</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex justify-center"
            >
              <img src={(logo as any).src || logo} alt={`Client ${idx + 1}`} className="h-16 object-contain grayscale hover:grayscale-0 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
