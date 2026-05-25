import React, { useState, useRef } from "react";
import "./index.css";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { Icon } from "@iconify/react";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import WaitlistPage from "./pages/Waitlist/Waitlist.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
