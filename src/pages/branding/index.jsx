import React from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Banner from "./Banner";

function Branding() {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Branding;
