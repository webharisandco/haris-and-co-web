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
      <h1 className="text-left text-6xl font-bold mb-14">Privacy & Cookie Policy</h1>
      <p className="text-left text-sm text-gray-500 mb-12">
        Last updated: 18 Sept 2025
      </p>

      <section id="Introduction" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p>
Welcome to Webandcrafts. We are committed to protecting your privacy and safeguarding your personal
information. This Privacy Policy explains how we collect, use, disclose, and protect your personal information
when you interact with our website, products, and services. By using our website and services, you consent
to the practices described in this Privacy Policy.</p>
      </section>
      <section id="Information-We-Collect" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p>We may collect and process the following types of personal information:</p>
        <p>Contact Information: This includes your name, email address, phone number, and postal address, which wecollect when you communicate with us or use our services.</p>
        <p>Usage Information: We may collect information about how you interact with our website and services, suchas IP addresses, device information, browser type, and pages visited. This data helps us improve our servicesand customise your user experience.</p>
        <p>Account Information: If you create an account with us, we collect and store information such as yourusername, password, and preferences.</p>
        
      </section>
      <section id="How-We-Use-Your-Information" className="mb-12">
        <h2 className="text-xl font-bold mb-4">How We Use Your Information</h2>
        <div className="space-y-5" >
          <p>We use your personal information for the following purposes:</p>
          <p>Providing Services:We use your information to deliver the products and services you request, including processing orders and providing customer support.</p>
          <p>Improving Services: We may analyse usage data to enhance our website and services, tailor content to your preferences, and develop new features.</p>
          <p>Communication: We may use your contact information to send you updates, promotional offers, newsletters, and important announcements. You can opt-out of these communications at any time.</p> 
          <p>Legal Compliance: We may process your data to comply with legal obligations and respond to lawfulrequests from government authorities.</p>
         </div>
         </section>

      <section id="Data-Security" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Data Security</h2>
        <p>We are committed to protecting your personal information. We employ industry-standard security measures to safeguard your data against unauthorised access, disclosure, alteration, and destruction. However, please be aware that no method of data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your information.</p>
      </section>
            {/* dout not clear */}
      <section id="Use-of-Google-reCAPTCHA" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Use of Google reCAPTCHA</h2>
        <p>
         Our website uses Google reCAPTCHA to protect against automated spam and abuse. This service is provided
         by Google LLC and helps us ensure that interactions on our website are genuine and secure. Google
         reCAPTCHA may collect certain information from you, such as your IP address, user agent, and browsing
         behaviour, to determine whether you are a human user or a bot.By using our website, you acknowledge and
         consent to the processing of this information by Google in accordance with their privacy policy and terms of
         service. For more information on Google's privacy practices, please visit   <a href="#" className="text-blue-800"> Google's Privacy Policy </a>and Terms of</p>
         <p>Service.. Please note that the use of Google reCAPTCHA is subject to Google's terms and policies, and we</p>
         <p>have no control over the data collected by Google through this service. If you have any concerns about the
         data collected by Google reCAPTCHA, we recommend reviewing Google's privacy policies or using
         alternative methods to contact us.If you do not agree to the collection and processing of your information by
         Google reCAPTCHA, please refrain from using our website or contact us directly for assistance.</p>
      </section>

      <section id="Sharing-Your-Information" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Sharing Your Information</h2>
        <p>We do not sell your personal information to third parties. However, we may share your data with trusted third parties for the following purposes:</p>
        <p>Service providers: We may share information with trusted third-party service providers who assist us in operating our website and providing our services.</p>
        <p>Legal requirements: We may disclose your information to comply with legal obligations or to protect our rights, privacy, safety, or property, and those of our customers and the public.</p>
      </section>
      <section id="Changes-to-This-Privacy-Policy" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
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
