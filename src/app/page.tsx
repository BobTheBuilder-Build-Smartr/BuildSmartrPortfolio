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
import { Section } from "@/components/section";

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
      <BentoGrid />

      <Benefits />

      <FeatureHighlight />

      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Section
        title="Our Clients"
        subtitle="Trusted by industry leaders"
        className="container px-10"
      >
        <Marquee className="py-8 bg-muted/30 rounded-lg my-8 [--duration:40s]">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-[200px] h-[200px] flex-shrink-0 justify-center"
            >
              <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                Logo
              </div>
              <div className="text-lg font-semibold text-center text-gray-900 dark:text-white line-clamp-2">
                {item}
              </div>
            </div>
          ))}
        </Marquee>
      </Section>
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
