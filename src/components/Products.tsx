// src/components/Products.tsx (or wherever you keep it)
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Phone, ArrowRight, X } from "lucide-react";

import raceway from "@/assets/Raceway.jpg";
import hotDipLadder from "@/assets/hot-dip-ladder.jpg";
import powderLadder from "@/assets/powder-ladder.avif";
import powderCoatedCable from "@/assets/powder-coated-cable.jpg";
import compartmentRaceway from "@/assets/compartment-raceway.webp";
import powderCoatedRaceway from "@/assets/powder-coated-raceway.jpg";
import giPerforated from "@/assets/gi-perforated.jpg";
import hotDip from "@/assets/hot-dip.webp";
import giLadder from "@/assets/gi-ladder.png";
import ladderCable from "@/assets/ladder-cable.jpg";
import giRaceway from "@/assets/gi-raceway.jpg";
import walkway from "@/assets/walkway.jpg";
import cable from "@/assets/cable.jpg";

type Product = {
  title: string;
  description: string;
  image: string;
  properties: { name: string; value: string }[];
  specifications: string[];
  details: string;
};

const products = [
  {
    title: "Cable Tray",
    description: "Robust support system for organizing and routing electrical cables in industrial and commercial environments.",
    image: cable,
    properties: [
      { name: "Width", value: "50-1200mm" },
      { name: "Height", value: "25mm-200mm" },
      { name: "Thickness", value: "1mm-4mm" },
      { name: "Length", value: "2500mm-3000mm" },
      { name: "Finish", value: "Painted, Powder Coated, Hot Dip Galvanized, Pre-Galvanized, Electro Plated" },
      { name: "Material", value: "MS, GI, SS, Aluminium" }
    ],
    specifications: [
      "MS, GI, SS, or Aluminium construction",
      "Multiple widths, heights, and finishes",
      "Quick, modular installation",
      "Low maintenance",
      "Ideal for power plants & factories"
    ],
    details: "Manufactured with MS, GI, SS, or Aluminium for strength and corrosion resistance. Available in multiple widths, heights, and finishes. Quick, modular installation and low maintenance."
  },
  {
    title: "Walkway Cable Tray",
    description: "Non-slip, durable walkway planks/platforms for safe rooftop and plant access.",
    image: walkway,
    properties: [
      { name: "Width", value: "300-1000mm" },
      { name: "Height", value: "25mm-50mm" },
      { name: "Thickness", value: "1.5mm-3mm" },
      { name: "Length", value: "2000mm-3000mm" },
      { name: "Finish", value: "Hot Dip Galvanized, Painted" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Hot-dip galvanized steel or MS sheet",
      "Lightweight but strong",
      "Resistant to moisture & warping",
      "Long service life",
      "Reliable in harsh environments"
    ],
    details: "Constructed from hot-dip galvanized steel or MS sheet for outstanding durability. Lightweight but strong—easy to move and install. Resistant to moisture, warping, and splintering; long service life."
  },
  {
    title: "GI Raceway",
    description: "Enclosed trunking system that protects and neatly routes wiring and cables.",
    image: giRaceway,
    properties: [
      { name: "Width", value: "50-600mm" },
      { name: "Height", value: "25mm-150mm" },
      { name: "Thickness", value: "1mm-3mm" },
      { name: "Length", value: "2500mm" },
      { name: "Finish", value: "Powder Coated, Pre-Galvanized, Hot Dip Galvanized, Electro Plated" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Supports concealed installations",
      "Powder coated, galvanized, or electro-plated",
      "Ideal for power & data cables",
      "Customizable with accessories",
      "Durable steel construction"
    ],
    details: "Supports concealed installations in offices, plants, and data centers. Ideal for both power and data cables."
  },

  {
    title: "Ladder Cable Tray",
    description: "Open, ladder-like design with parallel side rails and rungs for superior cable ventilation.",
    image: ladderCable,
    properties: [
      { name: "Width", value: "100-1200mm" },
      { name: "Height", value: "50mm-150mm" },
      { name: "Thickness", value: "1.5mm-5mm" },
      { name: "Length", value: "2500mm-6000mm" },
      { name: "Finish", value: "Painted, Powder Coated, Hot Dip Galvanized, Pre-Galvanized, Electro Plated" },
      { name: "Material", value: "MS, GI, SS, Aluminium" }
    ],
    specifications: [
      "Heavy-duty load capacity",
      "Excellent ventilation for cables",
      "Easy cable drop-ins",
      "Durable construction",
      "Best for high-capacity runs"
    ],
    details: "Facilitates easy cable drop-ins, laying, and fast maintenance."
  },
  {
    title: "GI Ladder Cable Tray",
    description: "Manufactured from galvanized iron (GI) for maximum corrosion resistance.",
    image: giLadder,
    properties: [
      { name: "Width", value: "150-1000mm" },
      { name: "Height", value: "50mm-150mm" },
      { name: "Thickness", value: "1.5mm-4mm" },
      { name: "Length", value: "2500mm-6000mm" },
      { name: "Finish", value: "Hot Dip Galvanized" },
      { name: "Material", value: "GI" }
    ],
    specifications: [
      "Excellent heat dissipation",
      "Supports heavy/medium duty loads",
      "Optional rung spacing",
      "Corrosion-resistant GI",
      "Outdoor & industrial use"
    ],
    details: "Ladder structure supports heavy and medium-duty installations. Available in a wide range of sizes."
  },


  {
    title: "GI Perforated Cable Tray",
    description: "Galvanized steel tray with precision perforations for excellent ventilation.",
    image: giPerforated,
    properties: [
      { name: "Width", value: "50-1000mm" },
      { name: "Height", value: "25mm-100mm" },
      { name: "Thickness", value: "1mm-3mm" },
      { name: "Length", value: "2500mm-3000mm" },
      { name: "Finish", value: "GI" },
      { name: "Material", value: "GI" }
    ],
    specifications: [
      "Reduces cable heat build-up",
      "Corrosion-resistant GI",
      "Easy to fit with covers",
      "Custom dimensions available",
      "Ideal for airflow & protection"
    ],
    details: "Highly resistant to corrosion and allows ventilation."
  },
  {
    title: "Powder Coated Raceway",
    description: "Raceway trunking system finished with a durable, smooth powder coat.",
    image: powderCoatedRaceway,
    properties: [
      { name: "Width", value: "50-600mm" },
      { name: "Height", value: "25mm-150mm" },
      { name: "Thickness", value: "1mm-3mm" },
      { name: "Length", value: "2500mm" },
      { name: "Finish", value: "Powder Coated" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Scratch & weather resistant",
      "Multiple color options",
      "Enhances aesthetics",
      "Protects cables",
      "Ideal for visible runs"
    ],
    details: "Resists scratches, weather, and chemicals; available in various colors."
  },
  {
    title: "Compartment Raceway",
    description: "Raceway with multiple compartments for organized cable segregation.",
    image: compartmentRaceway,
    properties: [
      { name: "Width", value: "50-600mm" },
      { name: "Height", value: "25mm-150mm" },
      { name: "Thickness", value: "1mm-3mm" },
      { name: "Length", value: "2500mm" },
      { name: "Finish", value: "GI, Powder Coated" },
      { name: "Material", value: "GI, MS" }
    ],
    specifications: [
      "Segregates power, data & control",
      "Prevents interference",
      "Simplifies maintenance",
      "Solid covers & divisions",
      "GI or powder coated steel"
    ],
    details: "Modern solution for complex commercial electrical layouts."
  },
  {
    title: "Powder Coated Perforated Cable Tray",
    description: "Steel tray with perforations and a high-quality powder coated finish.",
    image: powderCoatedCable,
    properties: [
      { name: "Width", value: "50-1000mm" },
      { name: "Height", value: "25mm-100mm" },
      { name: "Thickness", value: "1mm-3mm" },
      { name: "Length", value: "2500mm-3000mm" },
      { name: "Finish", value: "Powder Coated" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Dual corrosion & chemical protection",
      "Modern appearance",
      "Smooth edges for safety",
      "Custom sizes & fittings",
      "Ideal for exposed runs"
    ],
    details: "Dual protection against corrosion and chemicals."
  },
  {
    title: "Powder Coated Ladder Cable Tray",
    description: "Ladder-type tray with a tough, stylish powder coated finish.",
    image: powderLadder,
    properties: [
      { name: "Width", value: "100-1200mm" },
      { name: "Height", value: "50mm-150mm" },
      { name: "Thickness", value: "1.5mm-5mm" },
      { name: "Length", value: "2500mm-6000mm" },
      { name: "Finish", value: "Powder Coated" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Durable & aesthetic",
      "Resists weather & chemicals",
      "Open design for airflow",
      "Fast site installation",
      "Suitable for heavy-duty settings"
    ],
    details: "Combines airflow with superior durability and aesthetics."
  },
  {
    title: "Hot Dip Perforated Cable Tray",
    description: "Steel tray immersed in molten zinc for unmatched corrosion resistance.",
    image: hotDip,
    properties: [
      { name: "Width", value: "50-1000mm" },
      { name: "Height", value: "25mm-100mm" },
      { name: "Thickness", value: "1mm-3mm" },
      { name: "Length", value: "2500mm-3000mm" },
      { name: "Finish", value: "Hot Dip Galvanized" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Excellent for outdoor & marine use",
      "Long-term structural integrity",
      "Perforated for better airflow",
      "Custom sizes available",
      "Low maintenance"
    ],
    details: "Maintains structural integrity in harsh environments."
  },
  {
    title: "hot Dip Ladder Cable Tray",
    description: "Heavy-duty ladder tray with hot dip galvanized coating for superior protection and durability.",
    image: hotDipLadder,
    properties: [
      { name: "Width", value: "50–1400mm" },
      { name: "Height", value: "50–200mm" },
      { name: "Thickness", value: "1mm–4mm" },
      { name: "Length", value: "2500mm–3000mm" },
      { name: "Finish", value: "Hot Dip Galvanized" },
      { name: "Material", value: "MS, GI" }
    ],
    specifications: [
      "Uniform hot dip galvanized coating",
      "Rust, chemical & weather resistant",
      "Open design for easy cable drops",
      "Strong load capacity for tough projects",
      "Wide accessory range for customization"
    ],
    details: "Engineered for demanding industrial projects, hot dip ladder trays provide strong support for heavy cable loads while ensuring long-term protection against corrosion and environmental hazards."
  }

];


//
// Form validation schema (Zod)
//
const productInquirySchema = z.object({
  name: z.string().min(1, "First name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits without +91")
    .max(10, "Phone number must be 10 digits without +91")
    .regex(/^[0-9+ -]+$/, "Phone must contain digits, spaces, + or - only"),
  productName: z.string().min(1),
  message: z.string().min(1, "Message is required"),

});
type InquiryFormData = z.infer<typeof productInquirySchema>;

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<Record<number, "specifications" | "properties">>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  // react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(productInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productName: "",
      message: "",
    },
  });

  // Whenever selectedProduct changes, set productName default in form
  useEffect(() => {
    setValue("productName", selectedProduct?.title ?? "");
  }, [selectedProduct, setValue]);

  const toggleViewMode = (index: number) =>
    setViewMode((prev) => ({
      ...prev,
      [index]: prev[index] === "properties" ? "specifications" : "properties",
    }));

  // inside your Products component file (update onSubmit)
  
  const onSubmit = async (data: InquiryFormData) => {
  setIsSubmitting(true);

  // prefer VITE_API_URL in .env (for local dev set VITE_API_URL=http://localhost:5000)
  const base = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace(/\/$/, "")
    : "http://localhost:5000";

  const endpoint = `${base}/send`;

  try {
    console.log("Sending inquiry payload:", { endpoint, data });

    const res = await fetch("https://panelpoint-landing-hub-1.onrender.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // try to parse response body (safely)
    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("Server returned error:", res.status, body);
      throw new Error(body.message || `Server error: ${res.status}`);
    }

    // success: navigate to thank-you page with state
    navigate("/thank-you", {
      state: {
        name: data.name,
        from: "contact",
        // include productName if present so thank-you can show it
        productName: data.productName || undefined,
      },
    });

    // optional: notify user and reset form
    // alert("Inquiry sent! We'll get back to you soon."); // you can keep or remove this
    reset();
    setSelectedProduct(null);
  } catch (err: any) {
    console.error("Send error:", err);
    alert(`Failed to send inquiry: ${err.message || "Unknown error"}`);
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-[#FB923C]">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-quality cable trays and raceways designed for reliable cable management and fast
            installation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const mode = viewMode[index] || "specifications";

            const content =
              mode === "properties" ? (
                <table className="w-full text-sm border border-gray-200 mb-4">
                  <tbody>
                    {product.properties.map((p, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="font-medium px-2 py-1 bg-gray-50 w-1/3">{p.name}</td>
                        <td className="px-2 py-1">{p.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <ul className="space-y-1 mb-4">
                  {product.specifications.map((s, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-3 w-3 text-[#EF7F1A] mr-2" />
                      {s}
                    </li>
                  ))}
                </ul>
              );

            return (
              <Card
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-[#045AA2]/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#EF7F1A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Featured
                  </span>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold text-[#045AA2]">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  {content}

                  <button
                    onClick={() => toggleViewMode(index)}
                    className="text-[#045AA2] text-sm underline mb-4 block text-left"
                  >
                    {mode === "properties" ? "See Specifications" : "See Properties"}
                  </button>

                  <div className="mt-auto flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#045AA2] text-[#045AA2] hover:bg-[#045AA2] hover:text-white"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Learn More
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="flex-1 flex items-center bg-[#EF7F1A] hover:bg-[#045AA2] text-white"
                    >
                      <a href="tel:+917836870201">
                        <Phone className="h-4 w-4 mr-1" /> Call
                      </a>
                    </Button>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal with form */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full shadow-xl relative p-6">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full hidden md:block h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedProduct.title}</h3>
            <p className="text-muted-foreground mb-4">{selectedProduct.details}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <Label>Name</Label>
                  <Input {...register("name")} className="w-full" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input {...register("phone")} className="w-full" />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <Label>Email</Label>
                  <Input {...register("email")} type="email" className="w-full" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <Label>Product</Label>
                  {/* Register productName and rely on setValue in useEffect to populate it */}
                  <Input {...register("productName")} readOnly className="w-full bg-gray-100" />
                  {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
                </div>
              </div>

              <div>
                <Label>Message</Label>
                <Textarea {...register("message")} className="w-full min-h-[100px]" />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1 bg-[#FB923C]" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>

                <a
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 px-4 py-2"
                  href={`https://wa.me/917836870201?text=${encodeURIComponent(
                    `Hello, I am interested in ${selectedProduct?.title ?? ""}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.19 2 11.24c0 2.07.64 3.98 1.74 5.57L2 22l5.41-1.7c1.53.84 3.29 1.31 5.18 1.31 5.52 0 10-4.19 10-9.24S17.52 2 12 2zm0 16.54c-1.57 0-3.03-.45-4.26-1.23l-.3-.18-3.21.99 1.05-3.12-.2-.32A7.15 7.15 0 0 1 4.84 11c0-3.91 3.41-7.09 7.6-7.09s7.6 3.18 7.6 7.09-3.41 7.09-7.6 7.09z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </form>

          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
