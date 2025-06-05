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
import { ClientsMarquee } from "@/components/sections/clients-marquee";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      {/* <FeatureScroll /> */}
      <BentoGrid />
      <FeatureHighlight />
      <Benefits />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <ClientsMarquee />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
