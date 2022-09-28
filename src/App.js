import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="mt-20" name="main">
        <Hero />
        <About />
        <Support />
        <AllInOne />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
