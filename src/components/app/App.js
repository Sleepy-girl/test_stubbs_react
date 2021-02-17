import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import OurCompany from "../ourCompany/OurCompany";
import Services from "../services/Services";
import Slider from "../slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <OurCompany />
      <Footer />
    </>
  );
}

export default App;
