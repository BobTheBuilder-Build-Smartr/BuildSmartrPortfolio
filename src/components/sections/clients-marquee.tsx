"use client";

import { Section } from "@/components/section";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const marqueeItems = [
  { name: "JRN Development", src: "/Device-1.png" },
  { name: "North Pacific Development", src: "/Device-2.png" },
  { name: "Best Pro Building", src: "/Device-3.png" },
  { name: "Quorus Properties", src: "/Device-4.png" },
  { name: "Stockholm Construction Group", src: "/Device-5.png" },
  { name: "HarvWell Properties", src: "/Device-6.png" },
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
            className="flex flex-col ml-6 items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 px-2 w-[200px] h-[220px] flex-shrink-0 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200 dark:ring-gray-700">
              <Image
                src={item.src}
                alt={`${item.name} logo`}
                width={64}
                height={64}
                className="h-16 w-16 object-cover"
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