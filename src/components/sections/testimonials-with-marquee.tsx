import { Section } from "@/components/section";
import { Testimonials } from "./testimonials";
import { Marquee } from "@/components/ui/marquee";

const marqueeItems = [
  "🚀 Building the future of construction",
  "💡 AI-powered job site management",
  "🏗️ Smart construction solutions",
  "📱 Modern construction technology",
  "🔧 Streamlined project management",
  "📊 Real-time analytics and insights",
  "🏢 Transforming construction industry",
  "⚡ Efficient workflow automation",
];

export function TestimonialsWithMarquee() {
  return (
    <div className="space-y-8">
      <Marquee className="py-4 bg-muted/30 rounded-lg">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="mx-4 text-lg font-medium text-foreground/80"
          >
            {item}
          </div>
        ))}
      </Marquee>
      <Testimonials />
    </div>
  );
} 