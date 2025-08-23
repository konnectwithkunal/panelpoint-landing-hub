import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const keywords = [
    "Cable Tray Manufacturer in Bhiwadi",
    "Cable Tray Manufacturer in Jaipur",
    "Cable Tray Manufacturer in Lucknow",
    "Cable Tray Manufacturer in Ludhiana",
    "Cable Tray Manufacturer in Chandigarh",
    "Cable Tray Manufacturer in Kanpur",
    "Cable Tray Manufacturer in Bhopal",
    "Cable Tray Supplier in Indore",
    "Cable Tray Manufacturer in Indore",
    "Cable Tray Manufacturers Near Me",
    "Cable Tray Manufacturing",
    "Walkway Manufacturer",
    "Walkway Cable Tray",
    "Perforated GI Cable Tray",
    "GI Perforated Cable Tray Manufacturer",
    "GI Perforated Tray",
    "GI Perforated Cable Tray Sizes",
    "Powder Coated Raceway",
    "Powder Coated Cable Tray",
    "Powder Coated Perforated Cable Tray",
    "Electrical Cable Tray",
    "Cable Tray Dealer",
    "Cable Trays & Raceways",
    "Cable Ladder Raceway",
    "Raceway Cable Tray Price",
    "Raceway Manufacturer",
    "Raceway Cable Tray Supplier",
    "GI Raceway",
    "GI Raceway Cable Tray",
    "GI Cable Tray",
    "Cable Tray Price",
    "Cable Tray",
    "Cable Tray Supplier Near Me",
    "Cable Tray Cable Ladder",
    "Cable Ladder Supplier",
    "Cable Ladder Manufacturer",
    "Ladder Type Cable Tray",
    "Cable Ladder Raceway",
    "Ladder Cable Tray",
    "Cable Ladder Price",
    "Ladder Type Cable Tray Manufacturers",
    "GI Ladder Type Cable Tray",
    "Ladder Manufacturers Near Me",
    "Cable Tray Manufacturer",
    "Hot Dip Galvanized Perforated Cable Tray",
    "Cable Ladder Hot Dip Galvanized",
    "Hot Dip Cable Tray",
    "Hot Dipped Galvanized Cable Tray",
    "Hot Dip Galvanised Cable Tray",
    "Cable Tray Supplier",
    "Cable Tray Distributor",
    "Cable Tray Shop Near Me",
    "Ladder Cable Tray Supplier",
    "Ladder Cable Tray Manufacturer",
  ];

  return (
    <footer className="bg-[#EFF6FF] border-t border-gray-300 text-black">
      {/* 🔹 Keyword Section Above Footer */}
      <div className="bg-[#1E3A8A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
            {keywords.map((keyword, idx) => (
              <a
                key={idx}
                href="#"
                className="block transition-all hover:text-primary hover:scale-105 text-white/90 "
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Existing Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/b81d8602-7c98-4af8-9cf2-79fde2bfc9b9.png"
                alt="JP Shine Electricals Logo"
                className="h-10"
              />
            </div>
            <p className="text-black">
              Leading manufacturer of cable trays, raceways, and accessories for
              industrial cable management solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Popular Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Walkway Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  GI Raceway
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Ladder Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  GI Ladder Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  GI Perforated Cable Tray
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Powder Coated Raceway
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Compartment Raceway
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Powder Coated Perforated Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Powder Coated Ladder Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Hot Dip Perforated Cable Tray
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Hot Dip Ladder Cable Tray
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Location</h4>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3387.3438684301004!2d77.5010871754962!3d28.5085086757327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMwJzMwLjYiTiA3N8KwMzAnMTMuMiJF!5e1!3m2!1sen!2sin!4v1755346644936!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-600">
          <p>
            &copy; 2024 JP Shine Electricals. All rights reserved.{" "}
          </p>
          <p className="mt-2">
            Website is Designed and built by{" "}
            <a
              href="https://webalchemy.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#045AA2] hover:underline"
            >
              WebAlchemy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
