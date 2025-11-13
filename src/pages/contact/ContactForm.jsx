import { useState } from "react";
import Input from "../../components/ui/common/Input";
import Textarea from "../../components/ui/common/Textarea";
import ContactButton from "../../components/ContactButton";
import SuccessPopup from "./SuccessPopup";
import { identifyProfile, sendEvent } from "../../utils/data/aixel";

export default function ContactForm() {



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // <!-- aixel script starts -->
    identifyProfile(formData.email, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
    sendEvent("contact_submitted",{
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    // <!-- aixel script ends -->

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "30e1d54e-ce0d-4457-b974-5ffac38aef50", // from Web3Forms dashboard
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Success:", result);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        console.error("Error:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-[#0E0E0E] py-[50px] px-[16px] md:px-[80px] grid lg:grid-cols-[0.8fr_1fr] gap-[60px]">
      <div className="flex flex-col gap-8">
        <h6 className="text-white text-[34px]">Contact Us</h6>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
          <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} type="number" />
          <Textarea name="message" value={formData.message} onChange={handleChange} />
          <ContactButton text="Contact Us" type="submit" />
        </form>
      </div>

      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.484367376539!2d75.79183259999999!3d11.225735499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592e5bc6ffbb%3A0xbd15f0508abb882b!2sHaris%26Co!5e0!3m2!1sen!2sin!4v1737460912360!5m2!1sen!2sin"
          title="Haris&Co Location Map"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full min-h-[400px]"
        ></iframe>
      </div>


      {/* Popup Component */}
      <SuccessPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message="Your message has been sent!"
      />
    </div>
  );
}