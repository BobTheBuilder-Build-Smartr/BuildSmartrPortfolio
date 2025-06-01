import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for BuildSmartr",
};

export default function TermsOfUsePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <div className="prose dark:prose-invert">
        <p>Terms of Use content will be added here.</p>
      </div>
    </div>
  );
} 