import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NormalHeader from "../components/layout/NormalHeader";
import Chatbot from "../components/ui/HomePage/ChatbotAi";

export default function Layout() {
  return (
    <div className="bg-black">
      <NormalHeader />
      <Outlet />
      <Chatbot /> 
      <Footer />
    </div>
  );
}
