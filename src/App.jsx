import React, { useEffect } from "react";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import Aboutme from "./components/Aboutme/Aboutme";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
      <Toaster position="top-center" transition="bounce" />
    </div>
  );
}
