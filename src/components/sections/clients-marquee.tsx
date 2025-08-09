"use client";

import { Section } from "@/components/section";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const marqueeItems = [
  { name: "JRN Development", src: "/jobSites/jrn2.jpg" },
  { name: "North Pacific Development", src: "/Device-2.png" },
  { name: "Best Pro Building", src: "/Device-3.png" },
  { name: "Quorus Properties", src: "/Device-4.png" },
  { name: "Stockholm Construction Group", src: "/jobSites/stockholm.png" },
  { name: "HarvWell Properties", src: "/jobSites/harwell.png" },
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
            className="flex flex-col ml-6 items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-64 h-36 flex-shrink-0 text-center"
          >
            <div className="relative w-full h-12 mx-auto mb-3 flex-shrink-0 overflow-hidden rounded-md ring-1 ring-gray-200 dark:ring-gray-700 px-4">
              <Image
                src={item.src}
                alt={`${item.name} logo`}
                fill
                sizes="256px"
                className="object-contain"
                priority={index < 2}
              />
            </div>
            <div className="mt-auto text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
              {item.name}
            </div>
          </div>
        ))}
      </Marquee>
    </Section>
  );
} 