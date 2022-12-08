import React from "react";
import { Navbar } from "./components";
import {
  About,
  Chef,
  Findus,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Menu,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
