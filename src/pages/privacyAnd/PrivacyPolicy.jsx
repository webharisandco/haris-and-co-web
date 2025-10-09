import React from "react";
import NormalHeader from "../../components/layout/NormalHeader";
import Footer from "../../components/layout/Footer";

const sidebarItems = [
  "Information We Collect",
  "How We Use Your Information",
  "Data Security",
  "Use of Google reCAPTCHA",
  "Sharing Your Information",
  "Changes to This Privacy Policy",
  "Contact Us",
];

const PrivacyPolicy = () => (
  <>
  <NormalHeader />
  <div
    className="min-h-screen flex bg-white text-gray-900"
    style={{ scrollBehavior: "smooth" }}
  >
    {/* Sidebar */}
    <aside className="hidden md:block sticky overflow-x-hidden top-24 left-0 w-72 h-[calc(100vh-6rem)] px-10 overflow-y-auto">
      {sidebarItems.map((item) => (
        <a
          href={`#${item.replace(/\s+/g, "-")}`}
          key={item}
          className="block mb-6 text-base font-medium hover:text-black whitespace-nowrap"
          style={{ display: "flex", alignItems: "center" }}
        >
          {item}
        </a>
      ))}
    </aside>

    {/* Main Content */}
    <main className="flex-1 pt-32 pl-5 lg:pl-8 pr-8 lg:ml-72 bg-white max-w-4xl">
      <h1 className="text-5xl font-bold mb-14 text-left font-[helvetica-medium] tracking-wider">
        Haris&Co Privacy Policy
      </h1>
      <p className="text-left text-sm text-gray-500 mb-12">
        Last updated: 18 Sept 2025
      </p>

      {/* Sections */}
      <section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Information We Collect</h2>
        <p>
          We collect information to provide you with a better experience and to
          ensure our services run smoothly. This includes:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Contact information:</strong> Details such as your name,
            email address, phone number, company name, job title, and any other
            information you provide when filling out forms, requesting services,
            or contacting us directly.
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Account information:</strong> If you create an account, we
            may collect your login credentials, saved preferences, subscription
            settings, and records of your interactions with our services.
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Usage information:</strong> Data about how you use our
            website, including the pages you visit, links you click, time spent
            on the site, and the forms or content you interact with. This helps
            us understand user behavior and improve the overall experience.
          </li>
        </ul>
        <p className="mt-3">
          This information may be collected directly from you or automatically
          through your use of our website and services.
        </p>
      </section>

      <section id="How-We-Use-Your-Information" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Provide services:</strong> Process inquiries, respond to
            requests, send quotes, manage accounts, and deliver the services
            you’ve signed up for.
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Improve services:</strong> Monitor site performance, analyze
            usage trends, and optimize our offerings to create a more efficient,
            effective, and user-friendly experience.
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Communicate with you:</strong> Respond to emails, calls, or
            messages you send, as well as provide service-related updates,
            notifications, and promotional content (only if you have opted in to
            receive marketing).
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Ensure security and compliance:</strong> Detect and prevent
            fraudulent activity, safeguard against unauthorized access or
            harmful behavior, and meet our legal and regulatory obligations.
          </li>
        </ul>
      </section>

      <section id="Data-Security" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-semibold mb-4 font-[helvetica-medium] tracking-wider">Data Security</h2>
        <p>
          We use reasonable physical, electronic, and managerial safeguards to
          protect your information. These measures are designed to prevent
          unauthorized access, maintain data accuracy, and ensure the
          appropriate use of information.
        </p>
        <p className="mt-4">
          That said, no method of transmission over the internet or method of
          electronic storage is completely secure. While we make every effort to
          protect your information, we cannot guarantee absolute security.
        </p>
        <p className="mt-4">
          Unauthorized attempts to breach our site, misuse our services,
          introduce malware or viruses, or interfere with operations are
          strictly prohibited and may result in civil or criminal liability.
        </p>
      </section>

      <section id="Use-of-Google-reCAPTCHA" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-semibold mb-4 font-[helvetica-medium] tracking-wider">Use of Google reCAPTCHA</h2>
        <p>
          Our website uses Google reCAPTCHA to prevent automated spam and
          protect against malicious activity. In doing so, Google may collect
          certain information such as your IP address, browser type and version,
          operating system, and behavioral data (like mouse movements and
          clicks).
        </p>
        <p className="mt-4">
          This information is processed by Google in accordance with their
          Privacy Policy and Terms of Service. Haris&Co does not control the
          data collected by Google through this service.
        </p>
        <p className="mt-4">
          If you do not consent to this processing, we recommend contacting us
          directly instead of using the forms on our website.
        </p>
      </section>

      <section id="Sharing-Your-Information" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-semibold mb-4 font-[helvetica-medium] tracking-wider">
          Sharing & Disclosure of Information
        </h2>
        <p>
          We take your privacy seriously and share your information only when
          necessary and appropriate. This may include:
        </p>
        <ul className="list-disc ml-6 space-y-3 ">
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Service providers:</strong> Trusted partners who support
            operations by providing services such as website hosting, analytics,
            email marketing, or customer support. Contractually obligated to
            protect your information, and use it only to deliver agreed
            services.
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Legal obligations:</strong> Disclosing your information if
            required by law, subpoena, court order, or regulatory authority, or
            if necessary to protect rights, property, or safety.
          </li>
          <li>
            <strong className="font-[helvetica-medium] tracking-wider">Fraud prevention:</strong> Sharing relevant information with
            law enforcement, financial institutions, or fraud-prevention bodies
            if fraud, unauthorized activity, or security threats are suspected.
          </li>
        </ul>
        <p className="mt-4">
          We do not sell or rent your personal information to third parties for
          marketing purposes.
        </p>
      </section>

      <section id="Changes-to-This-Privacy-Policy" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-semibold mb-4 font-[helvetica-medium] tracking-wider">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in practices, technology, or legal obligations. We will revise the
          “Last Updated” date at the top of this page when updates are made.
          Review this policy periodically to stay informed.
        </p>
      </section>

      <section id="Contact-Us" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-semibold mb-4 font-[helvetica-medium] tracking-wider">Contact Us</h2>
        <section id="Contact-Us" className="mb-12 scroll-mt-32">
  <p>
    If you have questions about this Privacy Policy or our data practices,
    please contact us:
  </p>
  <p>
    <strong>Email:</strong>{" "}
    <a href="mailto:bd@harisand.co">
      bd@harisand.co
    </a>
  </p>
  <p>
    <strong>Phone:</strong>{" "}
    <a href="tel:+918075040330">
      +91 80750 40330
    </a>
  </p>
  <p>
    <strong>Address:</strong> 4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
  </p>
</section>

      </section>

      {/* India & Dubai Time UI */}
      <div className="flex justify-center gap-8 my-16">
        <div className="border border-white rounded-full px-8 py-4 flex items-center text-black">
          <span className="font-bold text-xl mr-2 font-[helvetica-medium] tracking-wider"></span>
          <span className="font-normal text-xl font-[helvetica-medium] tracking-wider"></span>
        </div>
        <div className="border border-white rounded-full px-8 py-4 flex items-center text-black">
          <span className="font-bold text-xl mr-2 font-[helvetica-medium] tracking-wider"></span>
          <span className="font-normal text-xl font-[helvetica-medium] tracking-wider"></span>
        </div>
      </div>
    </main>

  </div>
  <Footer />
  </>
  
);

export default PrivacyPolicy;
