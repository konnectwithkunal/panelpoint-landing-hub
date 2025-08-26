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

  // Scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300  bg-[#EFF6FF] shadow-md backdrop-blur
    text-primary-foreground`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
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
            
            
            { name: "Gallery", link: "#gallery" },
            { name: "Locations", link: "#locations" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={` text-black hover:text-[#F97316] text-[17px] transition-colors duration-200`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact + Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <div className="hidden lg:flex items-center space-x-4 text-lg">
            <a
              href="tel:+917836870201"
              className={`text-black p-2 rounded-full hover:bg-primary/20 transition-colors`}
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:sales@jpelectricalcontrols.com"
              className={`text-black  p-2 rounded-full hover:bg-primary/20 transition-colors`}
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
            
          >
          <a href="tel:+917836870201">
        Call Now</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 text-black
           rounded-md hover:bg-primary/20`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-[#EFF6FF] z-50 flex flex-col"
    style={{ height: "100vh", overflowY: "auto" }}
  >
    {/* Menu Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 flex-shrink-0">
      <img
        src="/lovable-uploads/b81d8602-7c98-4af8-9cf2-79fde2bfc9b9.png"
        alt="JP Shine Electricals logo"
        className="h-10"
      />
      <button
        onClick={() => setMenuOpen(false)}
        className="p-2 rounded-md hover:bg-gray-200 text-black"
      >
        <X size={28} />
      </button>
    </div>

    {/* Scrollable Menu Links */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
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
          className="block text-lg font-medium text-gray-900 hover:text-accent transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>

    {/* Bottom Buttons */}
    <div className="p-6 border-t border-gray-300 flex flex-col gap-3 flex-shrink-0">
      <Button asChild variant="accent" size="lg">
        <a href="#contact">Get Quote</a>
      </Button>
      <Button
        variant="default"
        size="lg"
       
      > <a href="tel:+917836870201">
        Call Now</a>
      </Button>
    </div>
  </div>
)}
    </header>
  );
};

export default Header;
