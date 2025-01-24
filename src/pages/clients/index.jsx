import React from "react";
import Header from "../../components/layout/Header";
import Banner from "./Banner";
import Works from "./Works";
import AllWorks from "./AllWorks";
import Footer from "../../components/layout/Footer";

function Clients() {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      <AllWorks />
      <Works />
      <Footer />
    </div>
  );
}

export default Clients;
