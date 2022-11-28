import React from "react";
import img1 from "../../assets/images/banner1 .jpg";
import img2 from "../../assets/images/banner2.jpg";
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full my-20">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl p-5" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl p-5" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Slider;
