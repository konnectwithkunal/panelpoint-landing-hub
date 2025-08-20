import { Button } from "@/components/ui/button";
import { Users, Factory, Clock, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Satisfied Clients" },
    { icon: Factory, value: 1000, suffix: "+", label: "Projects Completed" },
    { icon: Clock, value: 25, suffix: "+", label: "Years Experience" },
    { icon: TrendingUp, value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  ];

  // Track visibility of the stats section
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3,    // Start when 30% of the section is visible
  });

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                About <span className="text-[#FB923C]">JP Shine Electricals</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2011, JP SHINE ELECTRICAL AND CONTROLS PVT LTD is a trusted cable tray manufacturer, cable tray supplier, and exporter specializing in high-quality cable management and electrical solutions. Recognized as a leading cable tray manufacturer in Delhi NCR, we offer a wide product portfolio that includes perforated GI cable trays, powder coated cable trays, cable ladder raceways, compartment raceways, and other advanced solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We pride ourselves on delivering durable, corrosion-resistant products that meet stringent industry standards. Designed for easy installation, superior performance, and long-term reliability, our solutions are ideal for various industrial and commercial applications.
              </p>
            </div>
            <Button className="bg-[#FB923C]" variant="default" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Stats */}
          <div ref={ref} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-primary text-center"
              >
                <stat.icon className="h-12 w-12 text-[#045AA2] mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
