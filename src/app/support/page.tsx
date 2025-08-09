import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for Super-Builder AI",
};

export default function SupportPage() {
  return (
    <div className="container py-10 max-w-4xl">
      <div className="space-y-8">
        {/* Welcome Section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Support for Super-Builder AI</h1>
          <p className="text-lg text-muted-foreground">
            Welcome to Super-Builder AI support, provided by BuildSmartr Inc. We are here to help you get the most out of the Application.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions (FAQs)</h2>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Q1: How do I log into Super-Builder AI?</h3>
              <p className="text-muted-foreground">
                A1: Your account is created by a BuildSmartr Inc. administrator. You will use your designated phone number to log in. An OTP (One-Time Password) will be sent via SMS to this number for verification. Once verified, your session will be managed securely.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Q2: I&#39;m having trouble with the chat bot. What should I do?</h3>
              <p className="text-muted-foreground">
                A2: Please ensure your device has a stable internet connection. If the issue persists, try restarting the Super-Builder AI app. If you believe the bot is not responding correctly based on the project data, please provide feedback through the contact method below, mentioning the specific project and your query.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Q3: How do I see which projects I am part of?</h3>
              <p className="text-muted-foreground">
                A3: Your assigned projects are visible in the &quot;Projects&quot; tab within the Application. If a project is missing, please contact your BuildSmartr Inc. administrator.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Q4: Can I change my name or profile picture in the app?</h3>
              <p className="text-muted-foreground">
                A4: Yes, you can update your name, profile picture, and bio information within the &quot;Settings&quot; tab of the Application.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">Q5: I&#39;ve forgotten my password or can&#39;t receive an OTP.</h3>
              <p className="text-muted-foreground">
                A5: Super-Builder AI uses OTPs sent to your registered phone number for initial login or re-authentication. If you are not receiving OTPs, please check your SMS blocking settings, ensure your phone has network service, and that the registered phone number is correct with your BuildSmartr Inc. administrator. For persistent issues, contact support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
          <p className="text-muted-foreground">
            If you can&#39;t find the answer to your question in our FAQs, or if you need further assistance:
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Primary Support Contact:</h3>
              <p className="text-muted-foreground">
                Please reach out to your designated BuildSmartr Inc. administrator or project manager first for immediate assistance related to your projects or account access.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">For Technical App Issues:</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>BuildSmartr Inc.</p>
                <p>18860 24 Ave, Unit 110</p>
                <p>Surrey, BC V3Z 0Y8</p>
                <p>Canada</p>
                <p>Email: <a href="mailto:support@super-builder.ai" className="text-primary hover:underline">support@super-builder.ai</a></p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                When contacting us via email for technical issues, please provide as much detail as possible, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your phone number (used for login)</li>
                <li>The device you are using (e.g., iPhone 15, Samsung Galaxy S24)</li>
                <li>Operating System version (e.g., iOS 17.5, Android 15)</li>
                <li>The specific project you were working with (if relevant)</li>
                <li>A clear description of the issue</li>
                <li>Steps to reproduce the issue (if applicable)</li>
                <li>Screenshots (if helpful)</li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              We aim to respond to technical email inquiries within 24-48 business hours.
            </p>
          </div>
        </section>

        <p className="text-lg font-medium text-foreground">Thank you for using Super-Builder AI!</p>
      </div>
    </div>
  );
}