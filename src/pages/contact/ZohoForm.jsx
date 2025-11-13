import React, { useState } from "react";

const ZohoForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    if (!email) return true; // optional email
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation similar to Zoho's script
    if (!formData.lastName.trim()) {
      alert("Name cannot be empty.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://crm.zoho.in/crm/WebToLeadForm";
    form.acceptCharset = "UTF-8";

    const hiddenFields = {
      xnQsjsdp: "778932febf0d8920019a450a620b7cd92d33dbea218ea74ecdfacb86dc70dbd2",
      xmIwtLD:
        "8b8017e7b9795ab6a095d8b5cf4e1b75d9008451362ff10e5ba61bc8502cb0f55b1a7d7214015ae9d79e4a680f203d47",
      actionType: "TGVhZHM=",
      returnURL: "null",
      "Last Name": formData.lastName,
      Email: formData.email,
      Phone: formData.phone,
      LEADCF9: formData.message,
    };

    Object.entries(hiddenFields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft"
      style={{
        backgroundColor: "white",
        color: "black",
        maxWidth: "600px",
        padding: "25px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="zcwf_row" style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            maxLength="80"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="zcwf_row" style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength="100"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="zcwf_row" style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength="30"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="zcwf_row" style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <button
          type="submit"
          className="formsubmit zcwf_button"
          style={{
            background: "linear-gradient(0deg, #0279FF 0%, #00A3F3 100%)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        <button
          type="reset"
          className="zcwf_button"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ZohoForm;

