import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

import { identifyProfile, sendEvent } from "../../../utils/data/aixel";

import SuccessPopup from "../../../pages/contact/SuccessPopup";

const LandingButtonWithPopup = ({ text, icon, className }) => {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    if (!email) return true;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    identifyProfile(formData.email, formData);
    sendEvent("contact_submitted", formData);

    if (!formData.name.trim()) {
      alert("Name cannot be empty.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

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
      await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setOpen(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 2500);
    } catch (err) {
      console.error("Zoho Error:", err);
    }
  };

  return (
    <>
      {/* BUTTON */}
      <button id="get_proposal_button"
        onClick={() => setOpen(true)}
        className={`group bg-[#7744D5] hover:bg-[#7744D5]/50 text-white py-[15px] px-[20px] rounded-xl flex justify-center gap-[10px] transition-all duration-300 font-[Abroregular] w-full sm:w-auto ${className}`}
      >
        <span>{text}</span>
        {icon ?? (
          <ArrowUpRight
            className="group-hover:rotate-45 transition-all duration-300"
            size={23}
          />
        )}
      </button>

      {/* MODAL */}
      {open && (
        <div id="get_proposal_modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl p-6 w-[90%] max-w-md animate-popup">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X />
            </button>

            <h3 className="text-2xl font-semibold text-center mb-4">
              Let's Connect
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
              <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
              <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
              <Textarea name="message" value={formData.message} onChange={handleChange} />
              <ContactButton text="Submit" type="submit" /> */}
              <div className="flex flex-col gap-4"> <input type="text" placeholder="Your Name" className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7744D5]" name="name" value={formData.name} onChange={handleChange} /> 
              <input type="email" placeholder="Email Address" className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7744D5]" label="Email" name="email" value={formData.email} onChange={handleChange} /> 
              <input type="number" placeholder="Phone" className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7744D5]" label="Phone" name="phone" value={formData.phone} onChange={handleChange}/> 
              
              <textarea placeholder="Message" rows="3" className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7744D5]" /> 
              <button id="get_proposal_modalFormSubmitButton" className="bg-[#7744D5] text-white py-3 rounded-xl hover:bg-[#7744D5]/80 transition"> Submit </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <SuccessPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message="Your message has been sent!"
      />
    </>
  );
};

export default LandingButtonWithPopup;
