// src/pages/Contact.tsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/* -------------------- Validation schema -------------------- */
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(6, "Enter a valid phone")
    .max(20, "Phone is too long")
    .regex(/^[0-9+\s()-]+$/, "Phone can contain digits, spaces and +()-"),
  subject: z.string().min(1, "Subject is required"),
  productName: z.string().optional().or(z.literal("")),
  message: z.string().min(1, "Message is required"),
});
type ContactFormData = z.infer<typeof contactSchema>;

/* -------------------- Component -------------------- */
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      productName: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const base = import.meta.env.VITE_API_URL
      ? import.meta.env.VITE_API_URL.replace(/\/$/, "")
      : "https://panelpoint-landing-hub-1.onrender.com"; // fallback

    const endpoint = `${base}/send`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          productName: data.subject || "", // reuse subject as productName (optional)
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Server error:", res.status, body);
        throw new Error(body.message || `Server returned ${res.status}`);
      }

      // navigate to thank-you page with state
      navigate("/thank-you", { state: { name: data.name, from: "contact" } });

      // reset form
      reset();
    } catch (err: any) {
      console.error("Send error:", err);
      alert(`Failed to send inquiry: ${err?.message || "Network error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your cable tray and raceway requirements? Contact our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: FORM (spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" {...register("name")} placeholder="Name" />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="your@email.com" />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" {...register("phone")} placeholder="+91 " />
                      {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Product / Service (optional)</Label>
                      <Input id="product" {...register("productName")} placeholder="Product Name (optional)" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" {...register("subject")} placeholder="What can we help you with?" />
                    {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" {...register("message")} placeholder="Tell us about your requirements..." className="min-h-32" />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Contact cards */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+91-7836870201</p>
                <p className="text-muted-foreground">Mon-Sat 10:00 AM - 7:00 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">jpshineelectrical@gmail.com</p>
                <p className="text-muted-foreground">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">JP SHINE ELECTRICAL AND CONTROLS PVT LTD</p>
                <p className="text-muted-foreground">B - 12/ 5 Site - B Surajpur Industrial Area Greater Noida</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-accent mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
