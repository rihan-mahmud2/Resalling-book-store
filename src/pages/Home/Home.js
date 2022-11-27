import React from "react";
import Slider from "../../Components/Slider/Slider";
import Advertised from "./Advertised";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Advertised />
    </div>
  );
};

export default Home;
