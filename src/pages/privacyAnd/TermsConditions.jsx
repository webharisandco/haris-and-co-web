import React from "react";
const sidebarItems = [

];



const TermsConditions= () => (
    <div
    className="min-h-screen flex bg-white text-gray-900"
    style={{ scrollBehavior: "smooth" }}
  >
    {/* Sidebar */}
    <aside className="hidden md:block fixed top-24 left-0 w-64 h-[calc(100vh-6rem)] px-10 overflow-y-auto">
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
      <h1 className="text-5xl font-bold mb-14 text-left">
        Haris & Co. Terms and Conditions 
      </h1>
      <p className="text-left text-sm text-gray-500 mb-12">
        Last Updated: (Date)
      </p>
       <p>
        By accessing or using the services of Haris & Co. (“we,” “our,” or “us”), you (“Client,” “you,” or “your”) acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These Terms outline the rights and obligations of both parties concerning the services we provide. If you do not agree, please refrain from using our services.
       </p>
        <br />
        <section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4">Services</h2>
        <p>
          Haris & Co. offers a comprehensive range of digital marketing and related services to help businesses grow their online presence and achieve measurable results. These services may include, but are not limited to:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
            Branding and creative services
          </li>
          <li>
            Search engine optimization (SEO)
          </li>
          <li>
           Social media marketing and management
          </li>
          <li>
            Performance marketing
          </li>
          <li>
            Influencer marketing
          </li>
          <li>
            Content creation and copywriting
          </li>
          <li>
            Website design and development
          </li>
          <li>
            Production services
          </li>
        </ul>
        <p className="mt-3">
          The specific scope, deliverables, and timelines for services will be clearly outlined in a written proposal, quotation, or agreement tailored to each Client. Work will commence only after both parties have agreed to the scope in writing.
        </p>
      </section>
   
      <section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4">Client Responsibilities</h2>
        <p>
          To ensure services are delivered effectively, the Client agrees to:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
            Provide accurate, complete, and current information as required for the engagement
          </li>
          <li>
           Maintain and safeguard access credentials for accounts such as hosting, social media, or advertising platforms
          </li>
          <li>
            Respond promptly to requests for approvals, content, or feedback to avoid delays
          </li>
          <li>
            Refrain from using the services for unlawful, harmful, or unauthorized activities
          </li>
        </ul>
        <p className="mt-3">
          Failure to provide necessary access, information, or cooperation may delay or impact the quality of services, for which Haris & Co. cannot be held responsible.
        </p>
      </section>
      <br />

      <section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4">Fees and Payment</h2>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
             Fees will be outlined in the Client’s proposal, quotation, or contract.
          </li>
          <li>
           Payments must be made according to the agreed schedule.
          </li>
          <li>
           Unless otherwise stated in writing, all fees are non-refundable.
          </li>
          <li>
          Late or missed payments may result in suspension of ongoing work until the account is settled.
          </li>
           <li>
          Haris & Co. reserves the right to terminate the agreement and pursue recovery of any unpaid amounts. The Client is responsible for any additional costs incurred in the collection of overdue payments.
           </li>
        </ul>
      </section>
      <br />

      <section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4">Intellectual Property</h2>
        <p>
          Unless otherwise agreed in writing, all intellectual property created, developed, or provided by Haris & Co. during the engagement, including creative materials, strategies, code, and designs, remains the property of Haris & Co.
        </p>
        <p>
          Once full payment has been received, the Client is granted a non-exclusive license to use the deliverables solely for their own business purposes. This license does not permit resale, redistribution, or use outside the agreed scope of services. Unauthorized use, reproduction, or distribution of Haris & Co.’s work is prohibited.
        </p>
      </section>
      <br />

      <section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4">Confidentiality</h2>
        <p>
          Both parties agree to maintain the confidentiality of all non-public, sensitive, or proprietary information shared during the engagement. This includes, but is not limited to:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
            <strong>  </strong> 
          </li>
          <li>
            <strong> </strong> 
          </li>
          <li>
            <strong></strong>.
          </li>
        </ul>
        <p className="mt-3">
          
        </p>
      </section>


















        










<section id="Information-We-Collect" className="mb-12 scroll-mt-32">
        <h2 className="text-xl font-bold mb-4"> </h2>
        <p>
          
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>
            <strong>  </strong> 
          </li>
          <li>
            <strong> </strong> 
          </li>
          <li>
            <strong></strong>.
          </li>
        </ul>
        <p className="mt-3">
          
        </p>
      </section>

</main>
  </div>
)