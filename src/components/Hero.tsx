import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award, Facebook, Instagram, Linkedin } from "lucide-react";
import heroBg from "@/assets/factory-bg.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `url("${heroBg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Premium <span className="text-orange-400">Cable Trays</span> & Raceways
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Manufacturer of perforated, ladder and wire mesh cable trays with GI/HDG and
                powder-coated finishes. Engineered for durability, quick installs and clean cable management.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-orange-400" />
                <span className="font-semibold">ISI/ISO Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-orange-400" />
                <span className="font-semibold">Custom Sizes & Accessories</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-orange-400" />
                <span className="font-semibold">Fast Pan-India Delivery</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="group bg-orange-500 hover:bg-orange-600 border-none"
              >
                <a href="tel:+917836870201">
                  Call Now
                  <ArrowRight className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/50 text-black hover:bg-[#dcdcdc]"
              >
                <a href="#contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Bottom Left */}
      <div className="absolute bottom-12 left-10 md:left-20 flex space-x-4 z-20">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 lg:text-white hover:text-orange-400 transition-colors">
          <Facebook className="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 lg:text-white hover:text-orange-400 transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 lg:text-white hover:text-orange-400 transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
