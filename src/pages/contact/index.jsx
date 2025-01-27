import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import AddressSection from "../../components/ui/HomePage/AddressSection";

function Contact() {
  return (
    <div className="bg-black">
      <Banner />
      <div className=" py-[10px] bg-white">
        <AddressSection />
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
