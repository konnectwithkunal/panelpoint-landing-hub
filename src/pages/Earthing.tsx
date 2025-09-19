import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Award, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

import heroImage from "@/assets/chemical-earthing-hero.jpg";
import giEarthingStrip from "@/assets/gi-earthing-strip.jpg";
import earthingCompound from "@/assets/earthing-compound.jpg";
import copperEarthing from "@/assets/copper-earthing.jpg";
import plateEarthing from "@/assets/plate-earthing.jpg";

const Earthing = () => {
  useEffect(() => {
    document.title = "Chemical Earthing Manufacturer & Supplier | JP Electrical Controls";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Leading chemical earthing manufacturer and supplier in India. We provide GI strips, copper earthing, plate earthing & earthing compounds for industrial electrical safety systems.");
    }
  }, []);

  const products = [
    {
      title: "Chemical Earthing System",
      description: "Advanced chemical earthing solutions for superior grounding and electrical safety in all industrial installations.",
      image: heroImage,
      features: [
        "Superior conductivity & low resistance",
        "Long-lasting corrosion protection", 
        "Maintenance-free operation",
        "Suitable for all soil conditions"
      ]
    },
    {
      title: "GI Earthing Strips",
      description: "High-quality galvanized iron strips essential for secure earthing systems in residential and commercial settings.",
      image: giEarthingStrip,
      features: [
        "Hot dip galvanized finish",
        "Available in multiple sizes",
        "Fire-resistant construction",
        "Indoor & outdoor applications"
      ],
      specifications: [
        "Raw Material: Mild Steel as per IS 2062",
        "Sizes: 20X3, 25X3/6, 30X5/6, 35X5/6, 40X5/6, 50X5/6/8/10, 75X8/10, 100X8/10/12",
        "Finish: Hot Dip Galvanized as per IS 2629/4759, BS 729, ASTM 123"
      ]
    },
    {
      title: "Earthing Compound",
      description: "Revolutionary compound designed to improve earth contact and reduce corrosion for efficient grounding solutions.",
      image: earthingCompound,
      features: [
        "Enhanced earth contact",
        "Corrosion resistance",
        "Improved conductivity",
        "Long-term reliability"
      ]
    },
    {
      title: "Copper Earthing Solutions",
      description: "Premium copper earthing materials including strips and compounds made from 99.99% pure copper.",
      image: copperEarthing,
      features: [
        "99.99% pure copper construction",
        "Superior electrical conductivity",
        "Corrosion resistant",
        "Reliable electrical connections"
      ]
    },
    {
      title: "Plate Earthing",
      description: "Industrial-grade earthing plates providing safe, reliable, and efficient grounding for electrical systems.",
      image: plateEarthing,
      features: [
        "Industrial-grade construction",
        "Shock-free electrical systems",
        "Compliance with safety regulations",
        "Hot dip galvanized finish"
      ],
      specifications: [
        "Dimensions: 600X600mm, 300X300mm",
        "Usage: Industrial, Electrical & Communication",
        "Surface Finish: Hot Dip Galvanized",
        "Color: Silver/Copper"
      ]
    }
  ];

  const benefits = [
    "Single source for all earthing requirements",
    "Quality work with top-grade materials",
    "Complete design, manufacturing & installation service",
    "Comprehensive earthing systems & accessories",
    "Improves safety, reliability & system quality",
    "Ensures signal integrity of electrical systems",
    "Easy service and maintenance",
    "Meets local and international standards"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <nav className="flex items-center justify-center space-x-2 mb-6 text-sm">
            <span className="text-gray-300">Home</span>
            <ArrowRight className="h-4 w-4" />
            <span className="text-white font-medium">Earthing Solutions</span>
          </nav>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Chemical Earthing
            <span className="text-orange-400 block mt-2">Manufacturer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading manufacturer and supplier of chemical earthing systems, GI strips, and grounding solutions for industrial electrical safety
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <a href="tel:+917065005544" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call +91-7065005544
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="mailto:sales@jpelectricalcontrols.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Best Chemical Earthing Manufacturer & Supplier
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                JP Electrical & Controls is recognized as a premier <strong>Chemical Earthing Manufacturer</strong> and 
                <strong> Chemical Earthing Supplier in India</strong>, specializing in high-quality earthing solutions 
                with a strong presence in Greater Noida, India.
              </p>
              <p>
                We provide top-quality earthing solutions that ensure safety, durability, and efficiency for various 
                industrial needs. Our wide range of products is designed to protect electrical equipment, control panels, 
                and personnel against electric shocks and potential hazards.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Quality Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Top-tier chemical earthing rods and materials designed for superior grounding and safety
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Comprehensive Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wide range of chemical earthing products and accessories for diverse industrial needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customized earthing solutions developed to meet your specific project requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Earthing <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of earthing solutions for electrical safety and grounding systems
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-muted-foreground">
                              <ArrowRight className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {product.specifications && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                          <ul className="space-y-1">
                            {product.specifications.map((spec, i) => (
                              <li key={i} className="text-sm text-muted-foreground">• {spec}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        <a href="tel:+917065005544" className="flex items-center">
                          <Phone className="mr-2 h-4 w-4" />
                          Get Quote
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <a 
                          href={`https://wa.me/917065005544?text=${encodeURIComponent(`Hello, I am interested in ${product.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Earthing Solutions?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive earthing solutions with unmatched quality and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <ArrowRight className="h-6 w-6 text-orange-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Electrical Systems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert earthing solutions from India's leading chemical earthing manufacturer. 
            Contact us today for customized grounding systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="tel:+917065005544" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91-7065005544
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="mailto:sales@jpelectricalcontrols.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email: sales@jpelectricalcontrols.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Earthing;