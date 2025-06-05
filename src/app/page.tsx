import { Benefits } from "@/components/sections/benefits";
import { BentoGrid } from "@/components/sections/bento";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { FeatureScroll } from "@/components/sections/feature-scroll";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Marquee } from "@/components/magicui/marquee";

const marqueeItems = [
  "JRN Development",
  "North Pacific Development",
  "Best Pro Building",
  "Quorus Properties",
  "Stockholm Construction Group",
  "HarvWell Properties",
];

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      {/* <FeatureScroll /> */}
      <FeatureHighlight />
      <BentoGrid />
      <Benefits />
      {/* <Features /> */}
      <Testimonials />
      <Marquee className="py-8 bg-muted/30 rounded-lg my-8 [--duration:40s]">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="mx-4 text-lg font-medium text-foreground/80 flex-shrink-0"
          >
            <div>logo</div>
            <div>{item}</div>
          </div>
        ))}
      </Marquee>
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
