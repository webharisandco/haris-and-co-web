import React from "react";

const sidebarItems = [
  "Introduction",
  "Information We Collect",
  "How We Use Your Information",
  "Data Security",
  "Use of Google reCAPTCHA",
  "Sharing Your Information",
  "Changes to This Privacy Policy",
  "Contact Us",
];

const PrivacyPolicy = () => (
  <div className="min-h-screen flex bg-white text-gray-900">
    {/* Sidebar */}
    <aside className="hidden md:block w-64  pt-20 px-8 bg-white">
      {sidebarItems.map((item, index) => (
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
    <main className="flex-1 pt-36 pl-8 pr-8 bg-white max-w-4xl mx-auto">
      <h1 className="text-left text-6xl font-bold mb-14">Haris&Co Privacy Policy</h1>
      <p className="text-left text-sm text-gray-500 mb-12">
        Last updated: 18 Sept 2025
      </p>

      <section id="Introduction" className="mb-12">
        <h2 className="text-xl font-semibold mb-4"></h2>
        <p>
At Haris&Co, your privacy matters. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website (website link), use our services, or communicate with us. By accessing our website or services, you agree to the practices described here.</p>
<br />
<p>
  We do not sell or rent your personal information to third parties for marketing purposes without your explicit consent.
</p>
      </section>
      <div>
  <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
  <p>
    We collect information to provide you with a better experience and to ensure
    our services run smoothly. This includes:
  </p>
  <ul className="list-disc ml-6 mt-3 space-y-2">
    <li>
      <strong>Contact information:</strong> Details such as your name, email
      address, phone number, company name, job title, and any other information
      you provide when filling out forms, requesting services, or contacting us
      directly.
    </li>
    <li>
      <strong>Account information:</strong> If you create an account, we may
      collect your login credentials, saved preferences, subscription settings,
      and records of your interactions with our services.
    </li>
    <li>
      <strong>Usage information:</strong> Data about how you use our website,
      including the pages you visit, links you click, time spent on the site,
      and the forms or content you interact with. This helps us understand user
      behavior and improve the overall experience.
    </li>
  </ul>
  <p className="mt-3">
    This information may be collected directly from you or automatically through
    your use of our website and services.
  </p>
</div>
<br />


      <section id="How-We-Use-Your-Information" className="mb-12">
        <h2 className="text-xl font-bold mb-4">How We Use Your Information</h2>
        <div className="space-y-5" >
          <p>We use your personal information for the following purposes:</p>
          
         </div>
         </section>

      <section id="Data-Security" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Data Security</h2>
        <p>We use reasonable physical, electronic, and managerial safeguards to protect your information. These measures are designed to prevent unauthorized access, maintain data accuracy, and ensure the appropriate use of information.
That said, no method of transmission over the internet or method of electronic storage is completely secure. While we make every effort to protect your information, we cannot guarantee absolute security.
Unauthorized attempts to breach our site, misuse our services, introduce malware or viruses, or interfere with operations are strictly prohibited and may result in civil or criminal liability.</p>
      </section>
            {/* dout not clear */}
      <section id="Use-of-Google-reCAPTCHA" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Google reCAPTCHA</h2>
        <p>
          Our website uses Google reCAPTCHA to prevent automated spam and protect against malicious activity. In doing so, Google may collect certain information such as your IP address, browser type and version, operating system, and behavioral data (like mouse movements and clicks).
This information is processed by Google in accordance with their Privacy Policy and Terms of Service. Haris&Co does not control the data collected by Google through this service.
If you do not consent to this processing, we recommend contacting us directly instead of using the forms on our website.
        </p>
           </section>

      <section id="Sharing-Your-Information" className="mb-12">
        <p>

        </p>
      </section>
      <section id="Changes-to-This-Privacy-Policy" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Sharing & Disclosure of Information</h2>
        <p>
         We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We recommend that you review this policy periodically.        </p>
      </section>
      <section id="Contact-Us" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>
        If you have any questions, concerns, or requests related to your personal information or this Privacy Policy,please contact us at <a href="mailto:info@harisandco.com" className="text-blue-600 underline">
            info@harisandco.com
          </a>.
        </p>
      </section>

      {/* India & Dubai Time UI */}
      <div className="flex justify-center gap-8 my-16">
        <div className="border border-white rounded-full px-8 py-4 flex items-center text-black">
          <span className="font-bold text-xl mr-2">India:</span>
          <span className="font-normal text-xl">12:13 PM</span>
        </div>
        <div className="border border-white rounded-full px-8 py-4 flex items-center  text-black">
          <span className="font-bold text-xl mr-2">Dubai:</span>
          <span className="font-normal text-xl">10:43 AM</span>
        </div>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
