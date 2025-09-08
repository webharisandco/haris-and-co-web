import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NormalHeader from "../components/layout/NormalHeader";

export default function Layout() {
  return (
    <div className="bg-black">
      <NormalHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
