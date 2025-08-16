import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#EFF6FF] border-t border-gray-300 text-black">
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
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="hover:text-accent transition-colors"
                >
                  Perforated Cable Tray
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-accent transition-colors"
                >
                  Ladder Cable Tray
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-accent transition-colors"
                >
                  Wire Mesh Cable Tray
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-accent transition-colors"
                >
                  Cable Raceways
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-accent transition-colors"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Technical Support
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
            &copy; 2024 JP Shine Electricals. All rights reserved. |{" "}
            <a href="#" className="hover:text-accent">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-accent">
              Terms of Service
            </a>
          </p>
          <p className="mt-2">Website is Designed and built by WebAlchemy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
