import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import OurCompany from "../ourCompany/OurCompany";
import Services from "../services/Services";
import Slider from "../slider/Slider";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <AppStyled>
      <Header />
      <Slider />
      <Services />
      <OurCompany />
      <Footer />
    </AppStyled>
  );
}

export default App;
