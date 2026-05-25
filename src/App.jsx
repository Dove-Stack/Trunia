/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/");
  })

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h1 className="text-4xl font-bold text-cyan-400">
          Tailwind v4 is finally working
        </h1>
      </div>
    </>
  );
}

export default App
 */

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
