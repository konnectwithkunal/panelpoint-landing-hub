import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#EFF6FF] shadow-md backdrop-blur" : "bg-transparent"
        } text-primary-foreground`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/lovable-uploads/b81d8602-7c98-4af8-9cf2-79fde2bfc9b9.png"
            alt="JP Shine Electricals logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Products", link: "#products" },
            { name: "Why Us", link: "#why-us" },
            { name: "Clients", link: "#clients" },
            { name: "Gallery", link: "#gallery" },
            { name: "Locations", link: "#locations" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`${isScrolled ? "text-black" : "text-white"
                } hover:text-accent transition-colors duration-200`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact & Call Now */}
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <div className="hidden lg:flex items-center space-x-4 text-lg">
            <a
              href="tel:+917836870201"
              className="p-2 rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:sales@jpelectricalcontrols.com"
              className="p-2 rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <Button asChild variant="accent" size="sm">
            <a href="#contact">Get Quote</a>
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => (window.location.href = "tel:+917836870201")}
          >
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-primary/20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur p-4 space-y-4">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Products", link: "#products" },
            { name: "Why Us", link: "#why-us" },
            { name: "Clients", link: "#clients" },
            { name: "Gallery", link: "#gallery" },
            { name: "Locations", link: "#locations" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-lg hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button asChild variant="accent" size="sm">
              <a href="#contact">Get Quote</a>
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => (window.location.href = "tel:+917836870201")}
            >
              Call Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
