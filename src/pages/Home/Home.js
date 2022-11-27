import React from "react";
import Slider from "../../Components/Slider/Slider";
import Advertised from "./Advertised";
import Category from "./Category";
import { Review } from "./Review";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Advertised />
      <Review />
    </div>
  );
};

export default Home;
