import React, { useEffect } from "react";

const ZohoForm = () => {
  useEffect(() => {
    // Append Zoho Analytics tracking script dynamically
    const script = document.createElement("script");
    script.id = "wf_anal";
    script.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=8ee7537a9ef969b4f711343ac33f330ae8267d3eee1f96542e9162acd7df132f73e3d7d3f02aacd3e4e525bb1db4a693gidb6647f185eca33a175f2aa0a15cc615df52ce44d1bbbe810f3488c8519abc56egide7419f82b6b28a6f9001c04c169a5a9e677ab8543d64fc18ff443b49db24647fgidc3bd0067264dd496fa46000a7c8d9b100c4cb645f5dbf20c42a35858b8630375&tw=ee7841a1ccdcf7f4b07b1595593730615653fa748473a957874da0b8a199d221";
    document.body.appendChild(script);
  }, []);

  const validateEmail843311000000789385 = () => {
    const form = document.forms["WebToLeads843311000000789385"];
    const emailFld = form.querySelectorAll("[ftype=email]");
    for (let i = 0; i < emailFld.length; i++) {
      const emailVal = emailFld[i].value.trim();
      if (emailVal.length !== 0) {
        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert("Please enter a valid email address.");
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  };

  const checkMandatory843311000000789385 = () => {
    const mndFileds = ["Last Name"];
    const fldLangVal = ["Name"];
    for (let i = 0; i < mndFileds.length; i++) {
      const fieldObj =
        document.forms["WebToLeads843311000000789385"][mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.trim().length === 0) {
          if (fieldObj.type === "file") {
            alert("Please select a file to upload.");
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + " cannot be empty.");
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName === "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
            alert(fldLangVal[i] + " cannot be none.");
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type === "checkbox") {
          if (fieldObj.checked === false) {
            alert("Please accept " + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name === "Last Name") {
            window.name = fieldObj.value;
          }
        } catch (e) {}
      }
    }

    if (!validateEmail843311000000789385()) {
      return false;
    }

    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
      const webform = document.getElementById("webform843311000000789385");
      const service = urlparams.get("service");
      const smarturlfield = document.createElement("input");
      smarturlfield.setAttribute("type", "hidden");
      smarturlfield.setAttribute("value", service);
      smarturlfield.setAttribute("name", "service");
      webform.appendChild(smarturlfield);
    }
    document
      .querySelector(".crmWebToEntityForm .formsubmit")
      .setAttribute("disabled", true);

    return true;
  };

  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft crmWebToEntityForm"
      style={{
        backgroundColor: "white",
        color: "black",
        maxWidth: "600px",
      }}
    >
      <form
        id="webform843311000000789385"
        action="https://crm.zoho.in/crm/WebToLeadForm"
        name="WebToLeads843311000000789385"
        method="POST"
        acceptCharset="UTF-8"
        onSubmit={() => {
          document.charset = "UTF-8";
          return checkMandatory843311000000789385();
        }}
      >
        <input
          type="hidden"
          name="xnQsjsdp"
          value="c8236709f472e0eaf11e8379827cb44d6e5ad7f306563cf6e26b8eb87e03a68c"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="hidden"
          name="xmIwtLD"
          value="1d3081f37e76f2855b5c5e90c2720f0cee8f31ef712992e07220eafdd9a6a48b7157111481c58c6ad7856f5b8abf1330"
        />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />

        <style>{`
          html,body{margin:0px;}
          .formsubmit.zcwf_button{color:white !important;background:transparent linear-gradient(0deg,#0279FF 0%,#00A3F3 100%);}
          #crmWebToEntityForm.zcwf_lblLeft{width:100%;padding:25px;margin:0 auto;box-sizing:border-box;}
          #crmWebToEntityForm.zcwf_lblLeft *{box-sizing:border-box;}
          #crmWebToEntityForm{text-align:left;}
          #crmWebToEntityForm *{direction:ltr;}
          .zcwf_lblLeft .zcwf_title{word-wrap:break-word;padding:0px 6px 10px;font-weight:bold}
          .zcwf_lblLeft.cpT_primaryBtn:hover{background:linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important;box-shadow:0 -2px 0 0 #0159b9 inset !important;border:0 !important;color:#fff !important;outline:0 !important;}
          .zcwf_lblLeft .zcwf_col_fld input[type=text],input[type=password],.zcwf_lblLeft .zcwf_col_fld textarea{width:60%;border:1px solid #c0c6cc !important;resize:vertical;border-radius:2px;float:left;}
          .zcwf_lblLeft .zcwf_col_lab{width:30%;word-break:break-word;padding:0px 6px 0px;margin-right:10px;margin-top:5px;float:left;min-height:1px;}
          .zcwf_lblLeft .zcwf_col_fld{float:left;width:68%;padding:0px 6px 0px;position:relative;margin-top:5px;}
          .zcwf_lblLeft .zcwf_privacy{padding:6px;}
          .zcwf_lblLeft .wfrm_fld_dpNn{display:none;}
          .dIB{display:inline-block;}
          .zcwf_lblLeft .zcwf_col_fld_slt{width:60%;border:1px solid #ccc;background:#fff;border-radius:4px;font-size:12px;float:left;resize:vertical;padding:2px 5px;}
          .zcwf_lblLeft .zcwf_row:after,.zcwf_lblLeft .zcwf_col_fld:after{content:'';display:table;clear:both;}
          .zcwf_lblLeft .zcwf_col_help{float:left;margin-left:7px;font-size:12px;max-width:35%;word-break:break-word;}
          .zcwf_lblLeft .zcwf_help_icon{cursor:pointer;width:16px;height:16px;display:inline-block;background:#fff;border:1px solid #c0c6cc;color:#c1c1c1;text-align:center;font-size:11px;line-height:16px;font-weight:bold;border-radius:50%;}
          .zcwf_lblLeft .zcwf_row{margin:15px 0px;}
          .zcwf_lblLeft .formsubmit{margin-right:5px;cursor:pointer;color:#313949;font-size:12px;}
          .zcwf_lblLeft .zcwf_privacy_txt{width:90%;font-size:12px;font-family:Arial;display:inline-block;vertical-align:top;color:#313949;padding-top:2px;margin-left:6px;}
          .zcwf_lblLeft .zcwf_button{font-size:12px;color:#313949;border:1px solid #c0c6cc;padding:3px 9px;border-radius:4px;cursor:pointer;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
          .zcwf_lblLeft .zcwf_tooltip_over{position:relative;}
          .zcwf_lblLeft .zcwf_tooltip_ctn{position:absolute;background:#dedede;padding:3px 6px;top:3px;border-radius:4px;word-break:break-word;min-width:100px;max-width:150px;color:#313949;z-index:100;}
          .zcwf_lblLeft .zcwf_ckbox{float:left;}
          .zcwf_lblLeft .zcwf_file{width:55%;box-sizing:border-box;float:left;}
          .cBoth:after{content:'';display:block;clear:both;}
          @media all and (max-width:600px){.zcwf_lblLeft .zcwf_col_lab,.zcwf_lblLeft .zcwf_col_fld{width:auto;float:none !important;}.zcwf_lblLeft .zcwf_col_help{width:40%;}}
        `}</style>

        <div className="zcwf_row">
          <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
            <label htmlFor="Last_Name">
              Name <span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input type="text" id="Last_Name" name="Last Name" maxLength="80" aria-required="true" aria-label="Last Name" />
          </div>
        </div>

        <div className="zcwf_row">
          <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
            <label htmlFor="Email">Email</label>
          </div>
          <div className="zcwf_col_fld">
            <input type="text" id="Email" name="Email" ftype="email" maxLength="100" aria-label="Email" />
          </div>
        </div>

        <div className="zcwf_row">
          <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
            <label htmlFor="Phone">Phone</label>
          </div>
          <div className="zcwf_col_fld">
            <input type="text" id="Phone" name="Phone" maxLength="30" aria-label="Phone" />
          </div>
        </div>

        <div className="zcwf_row">
          <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
            <label htmlFor="LEADCF9">Message</label>
          </div>
          <div className="zcwf_col_fld">
            <textarea id="LEADCF9" name="LEADCF9" aria-label="LEADCF9" style={{ fontFamily: "Arial, sans-serif" }}></textarea>
          </div>
        </div>

        <input type="hidden" name="aG9uZXlwb3Q" value="" />

        <div className="zcwf_row">
          <div className="zcwf_col_lab"></div>
          <div className="zcwf_col_fld">
            <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Submit" />
            <input type="reset" className="zcwf_button" name="reset" value="Reset" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ZohoForm;
