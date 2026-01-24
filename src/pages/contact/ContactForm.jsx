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

  // EMAIL VALIDATION (same as Zoho)
  const validateEmail = (email) => {
    if (!email) return true; 
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
  };

// -------------------------
// SUBMIT WITHOUT REDIRECT
// -------------------------
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

  if (!formData.name.trim()) {
    alert("Name cannot be empty.");
    return;
  }

  if (!validateEmail(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Prepare data exactly as Zoho expects
  const payload = new URLSearchParams({
    xnQsjsdp: "778932febf0d8920019a450a620b7cd92d33dbea218ea74ecdfacb86dc70dbd2",
    xmIwtLD:
      "8b8017e7b9795ab6a095d8b5cf4e1b75d9008451362ff10e5ba61bc8502cb0f55b1a7d7214015ae9d79e4a680f203d47",
    actionType: "TGVhZHM=",
    returnURL: "",

    "Last Name": formData.name,
    Email: formData.email,
    Phone: formData.phone,
    LEADCF9: formData.message,
  });

  try {
    // Send to Zoho WITHOUT redirect
    await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
      method: "POST",
      body: payload,
      mode: "no-cors",
    });

    // Show popup and stay on current page
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      window.location.reload();
    }, 3000);    } catch (err) {
    console.error("Zoho Error:", err);
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
        onClose={() => {
          setShowPopup(false);
          window.location.reload(); // Reload page
        }}

        message="Your message has been sent!"
      />
    </div>
  );
}