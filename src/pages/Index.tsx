import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Locations />
      <Gallery />
      <Testimonials />
      <WhatsAppButton/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
