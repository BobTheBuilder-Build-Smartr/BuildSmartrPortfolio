import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for BuildSmartr",
};

export default function SupportPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="prose dark:prose-invert">
        <p>Support content will be added here.</p>
      </div>
    </div>
  );
} 