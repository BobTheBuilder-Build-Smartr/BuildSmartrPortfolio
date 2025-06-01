import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BuildSmartr",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p>Privacy Policy content will be added here.</p>
      </div>
    </div>
  );
} 