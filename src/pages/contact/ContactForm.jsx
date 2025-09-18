import React, { useState, useEffect } from "react";

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Time state
  const [times, setTimes] = useState({ India: "", Dubai: "", London: "" });
  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        India: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
        Dubai: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Dubai",
        }),
        London: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Europe/London",
        }),
      });
    };
    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = e => setFormData((f) => ({
    ...f,
    [e.target.name]: e.target.value,
  }));

  const handleSubmit = e => {
    e.preventDefault();
    alert("This is a demo. Connect your backend to enable submit!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 justify-center mx-auto">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 max-w-md flex flex-col text-left justify-center"
        >
          <h2 className="text-4xl mb-8">Contact Us</h2>
          {["Name", "Email", "Phone"].map((label) => (
            <div key={label} className="mb-6">
              <label className="block mb-1">{label}</label>
              <input
                type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                name={label.toLowerCase()}
                value={formData[label.toLowerCase()]}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white text-white outline-none py-2"
              />
            </div>
          ))}
          <div className="mb-6">
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full bg-transparent border-b border-white text-white outline-none py-2 resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 border border-white px-8 py-2 text-white text-lg hover:bg-white hover:text-black transition"
            style={{ maxWidth: "160px" }}
          >
            Submit
            <span style={{ fontSize: "1.5rem", lineHeight: 0 }}>→</span>
          </button>
        </form>
        {/* Map */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.484367376539!2d75.79183259999999!3d11.225735499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592e5bc6ffbb%3A0xbd15f0508abb882b!2sHaris%26Co!5e0!3m2!1sen!2sin!4v1737460912360!5m2!1sen!2sin"
            height="320"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Company Location"
            style={{ borderRadius: 0 }}
          ></iframe>
        </div>
      </div>
      {/* Centered time container below form & map */}
      <div className="flex justify-center items-center gap-8 mt-10">
        {Object.entries(times).map(([city, time]) => (
          <div
            key={city}
            className="border rounded-full py-2 px-8 text-white text-lg flex items-center font-medium"
            style={{
              borderColor: "#fff",
              background: "transparent",
              minWidth: "170px",
              justifyContent: "center"
            }}
          >
            <span className="font-bold mr-2">{city}:</span> {time}
          </div>
        ))}
      </div>
    </div>
  );
}
