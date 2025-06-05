"use client";

import { Section } from "@/components/section";
import { Marquee } from "@/components/magicui/marquee";
// We are using simple divs for items for now, Image import is not needed
// import Image from "next/image"; 

const marqueeItems = [
  "JRN Development",
  "North Pacific Development",
  "Best Pro Building",
  "Quorus Properties",
  "Stockholm Construction Group",
  "HarvWell Properties",
];

export function ClientsMarquee() {
  return (
    <Section
      title="Our Clients"
      subtitle="Job Sites Powered By AI"
      className="container px-10"
    >
      <Marquee 
        className="relative flex overflow-hidden p-2 py-8 bg-muted/30 rounded-lg my-8 [--duration:15s] [--gap:1rem] group"
      >
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 px-2 w-[200px] h-[220px] flex-shrink-0 text-center"
          >
            <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              Logo
            </div>
            <div className="mt-auto text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
              {item}
            </div>
          </div>
        ))}
      </Marquee>
    </Section>
  );
} 