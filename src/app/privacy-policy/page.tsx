import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BobTheBuilder",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-10 max-w-4xl">
      <div className="space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy for BobTheBuilder</h1>
          <p className="text-lg text-muted-foreground">Effective Date: June 15, 2026</p>
          <p className="text-muted-foreground">
            Welcome to BobTheBuilder (&quot;us,&quot; &quot;we,&quot; or &quot;our&quot;), an application provided by BuildSmartr Inc. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, BobTheBuilder (the &quot;Application&quot;). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Application.
          </p>
          <p className="text-muted-foreground">
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Effective Date&quot; of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. INFORMATION WE COLLECT</h2>
            <p className="text-muted-foreground">
              As users of BobTheBuilder are manually onboarded by an administrator from BuildSmartr Inc., the initial account setup primarily utilizes information already provided to BuildSmartr Inc. When you use the Application, we may collect the following information:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">a. Personal Data:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Phone Number:</span> Your phone number is used for account identification and authentication via a One-Time Password (OTP) verification process for logging into the Application.
                  </li>
                  <li>
                    <span className="font-medium">User Profile Information (Optional):</span> You may voluntarily provide or update additional personal information such as your name, profile image, and biography within the Application&apos;s settings. This information is not required to use the core functionality of the Application.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">b. Usage Data:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Project Associations:</span> Information about the projects you are associated with within the Application, as assigned by an administrator.
                  </li>
                  <li>
                    <span className="font-medium">Chat History:</span> The content of your conversations with the chatbots within the Application, including your queries and the bot&apos;s responses. This data is used to provide the service and may be used to improve the bot&apos;s performance for the specific project dataset it is trained on.
                  </li>
                  <li>
                    <span className="font-medium">App Activity:</span> We may collect information about your interactions with the Application, such as the features you use (e.g., navigating Projects, History, Chat, Settings tabs), and the time, frequency, and duration of your activities.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">c. Device Data:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Standard technical information such as your mobile device ID, model, manufacturer, operating system, version information, and IP address may be collected automatically through standard app operations to ensure functionality and for troubleshooting purposes.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. HOW WE USE YOUR INFORMATION</h2>
            <p className="text-muted-foreground">
              Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Manage your account and facilitate login via phone number and OTP, and maintain your login state using secure tokens.</li>
              <li>Enable user-to-bot chat functionality based on project-specific datasets.</li>
              <li>Display your project associations and chat history.</li>
              <li>Allow you to manage your optional profile information (name, image, bio).</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Application and the performance of our chatbots.</li>
              <li>Respond to your support requests and resolve issues.</li>
              <li>Ensure the security and integrity of our Application.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. DISCLOSURE OF YOUR INFORMATION</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information to third parties. We may share information we have collected about you in certain situations:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">a. Within BuildSmartr Inc.:</h3>
                <p className="text-muted-foreground">
                  Information may be accessible to relevant personnel within BuildSmartr Inc. for the purposes of providing the service, support, and administration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">b. By Law or to Protect Rights:</h3>
                <p className="text-muted-foreground">
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">c. Service Providers:</h3>
                <p className="text-muted-foreground">
                  We may share your information with third-party service providers that perform services for us or on our behalf, such as OTP delivery, cloud hosting (e.g., Amazon Web Services - AWS), data analytics, and customer service. These service providers are authorized to use your personal information only as necessary to provide these services to us and are contractually obligated to maintain the confidentiality and security of your data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">d. Business Transfers:</h3>
                <p className="text-muted-foreground">
                  In connection with any merger, sale of company assets of BuildSmartr Inc., financing, or acquisition of all or a portion of our business by another company, your information may be transferred.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. DATA SECURITY</h2>
            <p className="text-muted-foreground">
              We, through BuildSmartr Inc., use administrative, technical, and physical security measures to help protect your personal information. Our application backend is hosted on Amazon Web Services (AWS), which provides robust security infrastructure. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. DATA RETENTION</h2>
            <p className="text-muted-foreground">
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, for as long as your account is active as an employee/client of BuildSmartr Inc., or as needed to provide you services via the Application. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. YOUR DATA PROTECTION RIGHTS</h2>
            <p className="text-muted-foreground">
              Depending on your location and applicable laws, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><span className="font-medium">The right to access</span> – You have the right to request copies of your personal data.</li>
              <li><span className="font-medium">The right to rectification</span> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete. You can often update some of this information directly in the Application&apos;s settings.</li>
              <li><span className="font-medium">The right to erasure</span> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><span className="font-medium">The right to restrict processing</span> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><span className="font-medium">The right to object to processing</span> – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><span className="font-medium">The right to data portability</span> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p className="text-muted-foreground">
              To exercise these rights, please contact us at <a href="mailto:support@bobthebuilder.ai" className="text-primary hover:underline">support@bobthebuilder.ai</a> or through your BuildSmartr Inc. administrator.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. CHILDREN&apos;S PRIVACY</h2>
            <p className="text-muted-foreground">
              BobTheBuilder is intended for use by professionals in the construction industry and is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personally identifiable information from children under these ages. If we become aware that a child under the relevant age has provided us with personal information without parental consent, we will take steps to delete such information.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. CONTACT US</h2>
            <p className="text-muted-foreground">If you have questions or comments about this Privacy Policy, please contact us:</p>
            <div className="space-y-2 text-muted-foreground">
              <p>BuildSmartr Inc.</p>
              <p>18860 24 Ave, Unit 110</p>
              <p>Surrey, BC V3Z 0Y8</p>
              <p>Canada</p>
              <p>Email: <a href="mailto:support@bobthebuilder.ai" className="text-primary hover:underline">support@bobthebuilder.ai</a></p>
              <p>Website: <a href="https://bobthebuilder.ai/" className="text-primary hover:underline">https://bobthebuilder.ai/</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}