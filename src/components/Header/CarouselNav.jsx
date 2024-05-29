import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const CarouselNav = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="md:mt-20 mt-20">
      <Slider {...settings} className="relative bottom-16">
        <div>
          <img
            src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feedc6ad0-1c3c-40fb-a3f2-15b807b7ed30&w=1200&q=75"
            alt="maxway"
            className="rounded-[25px] w-full md:h-[500px] h-[200px]"
          />
        </div>
        <div>
          <img
            src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F61171d6a-d013-4cc4-9f4e-561abbca6d5d&w=1200&q=75"
            alt="maxway"
            className="rounded-[25px] w-full md:h-[500px] h-[200px]"
          />
        </div>

        <div>
          <img
            src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fceefc9aa-89e1-4464-9415-7cabc48a65d1&w=1200&q=75"
            alt="maxway"
            className="rounded-[25px] w-full md:h-[500px] h-[200px]"
          />
        </div>
      </Slider>

      <button
        className="relative md:bottom-[330px] bottom-40 right-5 shadow-lg w-[50px] h-[50px] transform -translate-y-1/2 bg-white rounded-full text-black focus:outline-none"
        onClick={() => {
          document.querySelector(".slick-prev").click();
        }}
      >
        <KeyboardArrowLeftIcon />
      </button>
      <button
        className="relative md:bottom-[330px] bottom-[160px] md:left-[1125px] left-[266px] shadow-lg w-[50px] h-[50px] transform -translate-y-1/2 bg-white rounded-full text-black focus:outline-none"
        onClick={() => {
          document.querySelector(".slick-next").click();
        }}
      >
        <NavigateNextIcon />
      </button>
    </div>
  );
};
