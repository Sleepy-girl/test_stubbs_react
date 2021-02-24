import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import OurCompany from "../ourCompany/OurCompany";
import Services from "../services/Services";
import SliderComponent from "../slider/Slider";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <AppStyled>
      <Header />
      <SliderComponent />
      <Services />
      <OurCompany />
      <Footer />
    </AppStyled>
  );
}

export default App;
