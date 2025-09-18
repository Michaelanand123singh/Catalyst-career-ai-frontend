import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.png";
import Img4 from "../assets/images/4.png";
import Img5 from "../assets/images/5.png";
import Img6 from "../assets/images/6.png";
import Img7 from "../assets/images/7.png";
import Img8 from "../assets/images/8.png";
import Img9 from "../assets/images/9.png";

const Crausal = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // we’ll add custom arrows instead
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-green-300 hover:bg-green-600 transition-all duration-300" />
    ),
  };

  return (
    <div className="relative w-full max-w-6xl ">
      {/* Carousel */}
      <Slider {...settings}>
        {[Img1, Img2, Img3,Img4,Img5,Img6,Img7,Img8,Img9].map((img, i) => (
          <div key={i} className="px-2">
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-purple-100"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 z-10">
        <button
          onClick={() => document.querySelector(".slick-prev")?.click()}
          className="bg-white  p-3 rounded-full shadow-lg transition duration-300"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-10">
        <button
          onClick={() => document.querySelector(".slick-next")?.click()}
          className="bg-white/70 hover:bg-green-200 p-3 rounded-full shadow-lg transition duration-300"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Crausal;
