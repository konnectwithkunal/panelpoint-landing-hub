"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award, Facebook, Instagram, Linkedin } from "lucide-react";
import heroBg from "@/assets/banner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `url("${(heroBg as any).src || heroBg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container   z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 py-2 md:py-10 pl-5 pr-5 md:pl-10 mt-14 md:mt-0 md:pr-96 bg-[#000000] bg-opacity-40 border border-[#000000]  rounded-lg"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Trusted Cable Tray  <span className="text-orange-400">Manufacturer & Leading Supplier </span>
                of Cable Trays and Raceways in India
              </h2>
              <p className="text-xl text-white/90 leading-relaxed md:pr-40">
                Manufacturer of Perforated, Ladder, Gi Raceway, Hot Dip & Walkway Cable Trays with Powder-Coated Finishes. Engineered for Durability, Quick Installs, and Clean Cable Management.
              </p>
            </div>

            {/* Features */}
            {/* <div className="flex flex-wrap gap-6">
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
            </div>*/}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="group bg-orange-500 hover:bg-orange-600 border-none"
              >
                <a href="tel:+917428124360">
                  Call Now
                  <ArrowRight className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
