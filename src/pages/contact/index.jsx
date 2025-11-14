import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import AddressSection from "../../components/ui/HomePage/AddressSection";
// import ZohoForm from "./ZohoForm";

function Contact() {
  return (
    <div className="bg-black">
      <Banner />
      <div className=" py-[10px] bg-white">
        <AddressSection />
      </div>
      <ContactForm />
      {/* <ZohoForm /> */}
    </div>
  );
}

export default Contact;
