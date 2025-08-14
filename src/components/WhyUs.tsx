import { ShieldCheck, Clock, TrendingUp, Award, ThumbsUp, Star, BarChart3, Wallet } from "lucide-react";

const WhyUs = () => {
  const points = [
    { icon: <ShieldCheck className="h-8 w-8 text-[#045AA2]" />, title: "Durability", desc: "Built to last with premium materials, ensuring long-term usage." },
    { icon: <Clock className="h-8 w-8 text-[#045AA2]" />, title: "Reliability", desc: "Consistent quality and dependable performance in every product." },
    { icon: <TrendingUp className="h-8 w-8 text-[#045AA2]" />, title: "Performance", desc: "Optimized for maximum efficiency in real-world applications." },
    { icon: <ShieldCheck className="h-8 w-8 text-[#045AA2]" />, title: "Safety", desc: "Engineered with strict ISI/ISO standards to protect users and equipment." },
    { icon: <ThumbsUp className="h-8 w-8 text-[#045AA2]" />, title: "Customer Satisfaction", desc: "A commitment to delivering solutions that meet and exceed expectations." },
    { icon: <Star className="h-8 w-8 text-[#045AA2]" />, title: "Brand Reputation", desc: "Trusted by clients nationwide for unmatched quality and service." },
    { icon: <BarChart3 className="h-8 w-8 text-[#045AA2]" />, title: "Increased Sales", desc: "Our products help businesses boost customer trust and sales." },
    { icon: <Wallet className="h-8 w-8 text-[#045AA2]" />, title: "Reduced Costs", desc: "Durable and efficient solutions that lower maintenance and replacement expenses." }
  ];

  return (
    <section id="why-us" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why <span className="text-[#FB923C]">Choose Us</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {points.map((p, i) => (
            <div key={i} className="bg-background rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{p.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
