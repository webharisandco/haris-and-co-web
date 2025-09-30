import React from "react";
import NormalHeader from "../../components/layout/NormalHeader";
import Footer from "../../components/layout/Footer";

const sidebarItems = [
  "Services",
  "Client Responsibilities",
  "Fees and Payment",
  "Intellectual Property",
  "Confidentiality",
  "Termination",
  "Limitation of Liability",
  "Indemnification",
  "Third-Party Tools and Platforms",
  "Governing Law",
  "Modifications",
  "Entire Agreement",
  "Contact",
];

const TermsAndConditions = () => (
  <>
  <NormalHeader />
  <div
      className="min-h-screen flex bg-white text-gray-900"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Sidebar */}
      <aside className="hidden md:block sticky top-24 left-0 w-64 h-[calc(100vh-6rem)] px-10 overflow-y-auto overflow-x-hidden">
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
      <main className="flex-1 pt-32 pl-8 pr-8 ml-72 bg-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-14 text-left font-[helvetica-medium] tracking-wider">
          Haris & Co. Terms & Conditions
        </h1>
        <p className="text-left text-sm text-gray-500 mb-12">
          Last Updated: (Date)
        </p>

        <section id="Services" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Services</h2>
          <p>
            Haris & Co. offers a comprehensive range of digital marketing and related services to help businesses grow their online presence and achieve measurable results. These services may include:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Branding and creative services</li>
            <li>Search engine optimization (SEO)</li>
            <li>Social media marketing and management</li>
            <li>Performance marketing</li>
            <li>Influencer marketing</li>
            <li>Content creation and copywriting</li>
            <li>Website design and development</li>
            <li>Production services</li>
          </ul>
          <p className="mt-3">
            The specific scope, deliverables, and timelines for services will be clearly outlined in a written proposal, quotation, or agreement tailored to each Client.
          </p>
        </section>

        <section id="Client-Responsibilities" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Client Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide accurate, complete, and current information as required for the engagement</li>
            <li>Maintain and safeguard access credentials for accounts such as hosting, social media, or advertising platforms</li>
            <li>Respond promptly to requests for approvals, content, or feedback to avoid delays</li>
            <li>Refrain from using the services for unlawful, harmful, or unauthorized activities</li>
          </ul>
          <p className="mt-3">
            Failure to provide necessary access, information, or cooperation may delay or impact the quality of services, for which Haris & Co. cannot be held responsible.
          </p>
        </section>

        <section id="Fees-and-Payment" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Fees and Payment</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Fees will be outlined in the Client’s proposal, quotation, or contract</li>
            <li>Payments must be made according to the agreed schedule</li>
            <li>Unless otherwise stated in writing, all fees are non-refundable</li>
            <li>Late or missed payments may result in suspension of ongoing work until the account is settled</li>
            <li>
              Haris & Co. reserves the right to terminate the agreement and pursue recovery of any unpaid amounts. The Client is responsible for any additional costs incurred in the collection of overdue payments.
            </li>
          </ul>
        </section>

        <section id="Intellectual-Property" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider ">Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all intellectual property created, developed, or provided by Haris & Co. during the engagement, including creative materials, strategies, code, and designs, remains the property of Haris & Co.
          </p>
          <p className="mt-2">
            Once full payment has been received, the Client is granted a non-exclusive license to use the deliverables solely for their own business purposes. This license does not permit resale, redistribution, or use outside the agreed scope of services. Unauthorized use, reproduction, or distribution of Haris & Co.’s work is prohibited.
          </p>
        </section>

        <section id="Confidentiality" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of all non-public, sensitive, or proprietary information shared during the engagement. This includes, but is not limited to business strategies, account details, marketing data, internal processes.
          </p>
          <p className="mt-2">
            Confidentiality obligations remain in effect even after the termination of services, unless disclosure is required by law or regulatory authority.
          </p>
        </section>

        <section id="Termination" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Termination</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Either party may terminate the agreement by providing written notice if the other party breaches these Terms.</li>
            <li>The Client must pay all fees for services delivered up to the termination date.</li>
            <li>
              Haris & Co. will provide completed work for which payment has been received, but is not obligated to deliver unfinished materials.
            </li>
            <li>Termination does not affect any rights or obligations that have already accrued to either party.</li>
          </ul>
        </section>

        <section id="Limitation-of-Liability" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Limitation of Liability</h2>
          <p>
            Haris & Co. will not be liable for any indirect, incidental, or consequential damages arising from the use of our services. This includes, but is not limited to, loss of revenue, profits, business opportunities, or data.
          </p>
          <p className="mt-2">
            We are not responsible for disruptions, policy changes, or performance issues caused by third-party platforms such as Google, Meta, or hosting providers. While we take reasonable steps to deliver high-quality services, results cannot be guaranteed due to factors beyond our control.
          </p>
        </section>

        <section id="Indemnification" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Indemnification</h2>
          <p>
            The Client agrees to indemnify, defend, and hold harmless Haris & Co., its employees, contractors, and representatives from any claims, liabilities, damages, or expenses arising from misuse or improper use of services, breach of terms, or infringement of intellectual property rights or violation of third-party terms resulting from the Client’s actions.
          </p>
          <p className="mt-2">
            This obligation continues after the services end, protecting Haris & Co. from any claims related to the Client’s actions during the engagement.
          </p>
        </section>

        <section id="Third-Party-Tools-and-Platforms" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Third-Party Tools and Platforms</h2>
          <p>
            Haris & Co. may use third-party tools, plugins, or platforms, such as Google Ads, Meta Ads, or analytics software, to deliver services. We cannot guarantee their availability or continued operation.
          </p>
          <p className="mt-2">
            We are not liable for disruptions, costs, or losses caused by changes in third-party policies, pricing, or technical issues. The Client remains responsible for complying with the terms of any third-party platforms used as part of their engagement.
          </p>
        </section>

        <section id="Governing-Law" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and interpreted in accordance with the laws of India. Any disputes, claims, or disagreements arising from or related to these Terms, including their formation, validity, or enforcement, shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
          <p>
            Both parties agree to submit to the authority of these courts for the resolution of any such matters.
          </p>
        </section>

        <section id="Modifications" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Modifications</h2>
          <p>
            Haris & Co. may revise or update these Terms and Conditions at any time to reflect changes in services, legal obligations, or business practices. Material updates will be communicated to Clients. Continued use of our services after such updates constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section id="Entire-Agreement" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Entire Agreement</h2>
          <p>
            These Terms and Conditions, together with any signed proposal, quotation, or contract, form the complete and exclusive agreement between Haris & Co. and the Client regarding the services provided. They supersede all prior agreements, discussions, negotiations, or understandings, whether written or oral, relating to the engagement.
          </p>
        </section>

        <section id="Contact" className="mb-12 scroll-mt-32">
          <h2 className="text-xl font-bold mb-4 font-[helvetica-medium] tracking-wider">Contact</h2>
          <p>
            If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us at:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong className="font-[helvetica-medium] tracking-wider">Email:</strong> (Email Address)
            </li>
            <li>
              <strong className="font-[helvetica-medium] tracking-wider">Phone:</strong> (Phone Number)
            </li>
            <li>
              <strong className="font-[helvetica-medium] tracking-wider">Address:</strong> (Business Address)
            </li>
          </ul>
        </section>
      </main>
  </div>
  <Footer />
  </>
  
);

export default TermsAndConditions;
