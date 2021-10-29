import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

import Tourses from "../Tourses/Tourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Tourses></Tourses>
      <Contact></Contact>
    </div>
  );
};

export default Home;
