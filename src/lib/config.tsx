import {
  BellIcon,
  BrainIcon,
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  UsersIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Super-Builder AI",
  description: "Revolutionize Construction with AI",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "AI Calendar",
    "Smart Scheduling",
    "Productivity",
    "Time Management",
  ],
  links: {
    email: "support@super-builder.app",
    twitter: "https://twitter.com/calaiapp",
    discord: "https://discord.gg/calaiapp",
    github: "https://github.com/calaiapp",
    instagram: "https://instagram.com/calaiapp",
  },
  features: [
    {
      name: "Multi-language Support",
      description:
        "Intelligent scheduling that learns your preferences and optimizes your time.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      name: "Seamless Chat Continuationg",
      description:
        "Automatically block time for focused work and personal activities.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    {
      name: "Easy Job switching",
      description:
        "AI suggests optimal times for meetings and events based on your habits.",
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      name: "XXXXXXXXX",
      description: "Access your schedule across all devices in real-time.",
      icon: <CloudIcon className="h-6 w-6" />,
    },
    {
      name: "XXXXXXXXX",
      description: "Easily coordinate schedules with team members and clients.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: "XXXXXXXXX",
      description:
        "Contextual notifications that adapt to your schedule and priorities.",
      icon: <BellIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "Multi-language Support",
      description:
        "Break down communication barriers with your preferred Input and Output languages.",
      imageSrc: "/Device-3.png",
      direction: "rtl" as const,
    },
    {
      title: "Full Chat History",
      description:
        "Never lose context—jump back into the conversation exactly where you left off.",
      imageSrc: "/Device-2.png",
      direction: "ltr" as const,
    },
    {
      title: "Easy Job Management",
      description:
        "Select any of your projects and upload any documents or information with ease.",
      imageSrc: "/Device-1.png",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "AI Superpower",
      content:
        "Our app uses our construction specific Ai model and learns everything about your project to get you any information you need.",
      imageSrc: "/Device-1.png",
      imageAlt: "AI scheduling illustration",
      fullWidth: true,
    },
    {
      title: "Your Projects",
      content:
        "Upload any documents for your project and it's data is organized to give you answers.",
      imageSrc: "/Device-2.png",
      imageAlt: "Time blocking illustration",
      fullWidth: false,
    },
    {
      title: "Intelligent Search",
      content:
        "Receive context and page numbers for where the data was retrieved from so you can double check.",
      imageSrc: "/Device-3.png",
      imageAlt: "Smart reminders illustration",
      fullWidth: false,
    },
    {
      title: "Powerful 24/7 Collaboration",
      content:
        "Allow your team and tradespeople to instantly get any information they need- your jobsite never sleeps.",
      imageSrc: "/Device-4.png",
      imageAlt: "Team collaboration illustration",
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "What is J1?",
      image: "/Device-4.png",
    },
    {
      id: 2,
      text: "How much should my total lumber bill be?",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Make me a list of the windows and their sizes?",
      image: "/spinner.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI",
      image: "/Device-1.png",
    },
  ],
  pricing: [
    {
      name: "Free",
      href: "/contact",
      price: "$0",
      period: "month",
      yearlyPrice: "$0",
      features: [
        "Upload plans and documents",
        "2 questions per month",
        "Connect upto 1 device",
        "Choose between English and Spanish languages",
      ],
      description: "Perfect for getting started",
      buttonText: "Start Free",
      isPopular: false,
    },
    {
      name: "Basic",
      href: "/contact",
      price: "$49",
      period: "month",
      yearlyPrice: "$0",
      features: [
        "All feature of Free plan",
        "55 questions per month",
        "Connect upto 5 devices",
        "Choose any of the input language",
        "Choose any of the output language",
      ],
      description: "Best for small/medium teams",
      buttonText: "Best Starter",
      isPopular: false,
    },
    // {
    //   name: "Pro",
    //   href: "/contact",
    //   price: "$79",
    //   period: "month",
    //   yearlyPrice: "$120",
    //   features: [
    //     "All feature of Pro plan",
    //     "Unlimited questions per month",
    //     "Connect upto 10 devices",
    //     "Choose any input language from 150+ languages",
    //     "Choose any output language from 150+ languages",
    //   ],
    //   description: "Ideal for everyday use and large teams",
    //   buttonText: "Upgrade to Pro",
    //   isPopular: true,
    // },
  ],
  faqs: [
    {
      question: "How does Super-Builder AI interpret my construction drawings?",
      answer: (
        <span>
          Super-Builder AI uses advanced AI to analyze architectural and engineering
          documents, recognizing key elements such as dimensions, materials, and
          structural components. It then provides insights, flags conflicts, and
          answers questions based on the plans&apos; details.
        </span>
      ),
    },
    {
      question: "Is my data secure with Super-Builder AI?",
      answer: (
        <span>
          Absolutely. We encrypt all project data end-to-end and adhere to strict
          data privacy practices. Your sensitive construction documents and chat
          history remain confidential and secure.
        </span>
      ),
    },
    {
      question: "How does the team collaboration feature work?",
      answer: (
        <span>
          Our AI keeps everyone in the loop by centralizing plan updates and
          answers to common questions. Team members can ask Super-Builder AI about
          any aspect of the project, and the AI coordinates changes and
          notifications across the entire team.
        </span>
      ),
    },
    {
      question: "Do I need internet access to use Super-Builder AI?",
      answer: (
        <span>
          While core functionality requires an online connection to run AI
          queries, you can still access certain cached or previously viewed data
          offline. Once reconnected, Super-Builder AI syncs and updates the project
          details and insights.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#", text: "Features" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Blog" },
        { href: "#", text: "Contact" },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      text: "Super-Builder AI has revolutionized how we interpret construction drawings. It's like having an experienced site manager on demand.",
      name: "Alice Johnson",
      role: "Freelance Architect",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      text: "This AI tool has drastically reduced miscommunications on site, saving our team both time and money.",
      name: "Bob Brown",
      role: "Project Manager, Skyline Construction",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      text: "The AI’s plan analysis helped me maintain better oversight across multiple developments.",
      name: "Charlie Davis",
      role: "Independent Contractor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      text: "Super-Builder AI's advanced plan scanning has made our weekly site meetings so much more efficient.",
      name: "Diana Evans",
      role: "Construction Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      text: "The team communication features have streamlined our subcontractors’ coordination like never before.",
      name: "Ethan Ford",
      role: "Site Superintendent",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      text: "Super-Builder AI helps us track each plan detail effortlessly, from blueprint changes to supply orders.",
      name: "Fiona Grant",
      role: "Procurement Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      text: "The AI-driven insights have helped me optimize daily site tasks and spot potential issues early.",
      name: "George Harris",
      role: "Site Foreman",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      text: "Its integration with our project management tools has created a truly seamless construction workflow.",
      name: "Hannah Irving",
      role: "Digital Construction Specialist",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 9,
      text: "The automated reminders have drastically reduced missed deadlines in our project timeline.",
      name: "Ian Johnson",
      role: "Operations Supervisor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 10,
      text: "Super-Builder AI's ability to interpret complex structural drawings is a game-changer.",
      name: "Julia Kim",
      role: "Structural Engineer",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 11,
      text: "The AI-suggested solutions for design conflicts have increased our team’s productivity and reduced rework.",
      name: "Kevin Lee",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 12,
      text: "The real-time data on build progress has made my urban planning far simpler.",
      name: "Laura Martinez",
      role: "Urban Development Planner",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 13,
      text: "Having the AI highlight potential building constraints upfront has saved me from major setbacks.",
      name: "Michael Nelson",
      role: "Commercial Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 14,
      text: "Super-Builder AI's daily updates have helped me stick to critical timelines and keep scheduling on track.",
      name: "Natalie Owens",
      role: "Project Scheduler",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      text: "The AI suggestions for break times and resource allocation have improved jobsite productivity.",
      name: "Oscar Parker",
      role: "Site Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 16,
      text: "Integrating Super-Builder AI with our existing vendor systems has streamlined our material orders.",
      name: "Patricia Quinn",
      role: "Procurement Specialist",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 17,
      text: "Tracking energy usage and optimizing processes is so much easier with Super-Builder AI's analytics.",
      name: "Quincy Roberts",
      role: "Sustainability Consultant",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 18,
      text: "The goal-setting features keep every build phase on track and within budget.",
      name: "Rachel Stevens",
      role: "Cost Analyst",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 19,
      text: "The AI-suggested focus times for our crew have boosted on-site productivity daily.",
      name: "Samuel Thompson",
      role: "Project Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 20,
      text: "Sharing availability with multiple subcontractors across regions is finally effortless.",
      name: "Tina Upton",
      role: "Global Logistics Coordinator",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 21,
      text: "The AI-powered meeting recaps are brilliant. I can review everything without missing a detail.",
      name: "Ulysses Vaughn",
      role: "Executive Assistant to the CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 22,
      text: "Super-Builder AI's daily project insights have been a game-changer for our entire construction pipeline.",
      name: "Victoria White",
      role: "Business Analyst, Construction Sector",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 23,
      text: "The recommended networking resources have expanded our industry partnerships.",
      name: "William Xavier",
      role: "Startup Founder, BuildTech Solutions",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 24,
      text: "Integrating with my health & safety compliance tools has made site inspections a breeze.",
      name: "Xena Yates",
      role: "Safety & Compliance Officer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 25,
      text: "The AI-driven timeline suggestions keep us comfortably ahead of schedule on every job.",
      name: "Yannick Zimmerman",
      role: "Lead Project Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
