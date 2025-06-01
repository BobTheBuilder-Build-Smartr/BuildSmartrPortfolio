import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for BobTheBuilder",
};

export default function TermsOfUsePage() {
  return (
    <div className="container py-10 max-w-4xl">
      <div className="space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Terms of Use for BobTheBuilder</h1>
          <p className="text-lg text-muted-foreground">Effective Date: June 15, 2026</p>
          <p className="text-muted-foreground">
            Please read these Terms of Use (&quot;Terms,&quot; &quot;Terms of Use&quot;) carefully before using the BobTheBuilder mobile application (the &quot;Service,&quot; &quot;Application&quot;) operated by BuildSmartr Inc. (&quot;us,&quot; &quot;we,&quot; or &quot;our&quot;).
          </p>
          <p className="text-muted-foreground">
            Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all users who wish to access or use the Service. As users are onboarded by an administrator from BuildSmartr Inc., continued access is also subject to your ongoing relationship with BuildSmartr Inc. or its clients. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. DESCRIPTION OF SERVICE</h2>
            <p className="text-muted-foreground">
              BobTheBuilder is a mobile application designed for use by construction site workers, managers, and related personnel who are clients or employees of BuildSmartr Inc. or its designated partners. The Application allows users, after signing in with a phone number and One-Time Password (OTP) and subsequent session management via secure tokens, to access features across four main tabs: Projects, History, Chat, and Settings. A core function of the Application is to enable users to chat with a bot that is trained on particular project-specific datasets relevant to their work. Users can also update certain personal information such as their name, profile image, and bio.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. ACCOUNTS</h2>
            <p className="text-muted-foreground">
              Your account for the Service is provisioned by an administrator from BuildSmartr Inc. You will use your provided phone number and an OTP to log in. You are responsible for maintaining the confidentiality of the OTPs used for access and the security of your device to protect your session. You agree to accept responsibility for any and all activities or actions that occur under your account. You must notify us or your BuildSmartr Inc. administrator immediately upon becoming aware of any breach of security or unauthorized use of your account. You guarantee that you are of legal age to use this application in your jurisdiction, typically 18 years or older, or as contractually agreed with BuildSmartr Inc.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. INTELLECTUAL PROPERTY</h2>
            <p className="text-muted-foreground">
              The Service and its original content (excluding content provided by users, such as chat inputs and optional profile information, but including the structure of the application, visual design, and the underlying technology of the chatbots as developed by BuildSmartr Inc.), features, and functionality are and will remain the exclusive property of BuildSmartr Inc. and its licensors. The datasets used to train the chatbots are the intellectual property of their respective owners (which may include BuildSmartr Inc. or its clients) and are used within the Service under license or ownership. The Service is protected by copyright, trademark, and other laws of Canada and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BuildSmartr Inc.
            </p>
            <div className="pl-4 border-l-2 border-muted">
              <p className="text-muted-foreground font-medium mb-2">User-Generated Content:</p>
              <p className="text-muted-foreground">
                By submitting content (e.g., text inputted into the chat interface, or optional profile information like name, image, bio) to the Service, you grant BuildSmartr Inc. a worldwide, non-exclusive, royalty-free license to use, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in connection with providing and promoting the Service, and for improving the chatbot's performance related to the specific project dataset. You represent and warrant that you have all the rights, power, and authority necessary to grant the rights granted herein to any content that you submit.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. USER CONDUCT</h2>
            <p className="text-muted-foreground">You agree not to use the Service:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any unauthorized advertising or promotional material.</li>
              <li>To impersonate or attempt to impersonate BuildSmartr Inc., a BuildSmartr Inc. employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm BuildSmartr Inc. or users of the Service or expose them to liability.</li>
              <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored (hosted on Amazon Web Services - AWS), or any server, computer, or database connected to the Service.</li>
              <li>To reverse engineer, decompile, or disassemble any part of the Service, including the chatbots, except as permitted by applicable law.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. TERMINATION</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms or termination of your relationship with BuildSmartr Inc. or its client that provides you access.
            </p>
            <p className="text-muted-foreground">
              If you wish to terminate your account, you should contact your BuildSmartr Inc. administrator.
            </p>
            <p className="text-muted-foreground">
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
            <p className="text-muted-foreground font-medium">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. BUILDMARTR INC. MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SERVICE, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
            </p>
            <p className="text-muted-foreground">
              NEITHER BUILDMARTR INC. NOR ANY PERSON ASSOCIATED WITH BUILDMARTR INC. MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICE. WITHOUT LIMITING THE FOREGOING, NEITHER BUILDMARTR INC. NOR ANYONE ASSOCIATED WITH BUILDMARTR INC. REPRESENTS OR WARRANTS THAT THE SERVICE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
            </p>
            <p className="text-muted-foreground">
              IN NO EVENT WILL BUILDMARTR INC., ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICE, ANY CONTENT ON THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. GOVERNING LAW</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. CHANGES TO TERMS</h2>
            <p className="text-muted-foreground">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will endeavor to provide at least 30 days&apos; notice prior to any new terms taking effect by posting the new Terms on this site or through the Application. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-muted-foreground">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you&apos;re no longer authorized to use the Service.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. CONTACT US</h2>
            <p className="text-muted-foreground">If you have any questions about these Terms, please contact us:</p>
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