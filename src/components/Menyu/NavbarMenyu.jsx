import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import { FirstFood } from "./MenyuFoods/index";

export const NavbarMenyu = () => {
  const sliderRef = useRef();
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1280, // defines screen size for xl screens
        settings: {
          slidesToShow: 6, // show 6 slides on screens <= 1280px
        },
      },
      {
        breakpoint: 1024, // defines screen size for lg screens
        settings: {
          slidesToShow: 1, // show 5 slides on screens <= 1024px
        },
      },
      {
        breakpoint: 768, // defines screen size for md screens
        settings: {
          slidesToShow: 1, // show 4 slides on screens <= 768px
        },
      },
      {
        breakpoint: 640, // defines screen size for sm screens
        settings: {
          slidesToShow: 1, // show 3 slides on screens <= 640px
        },
      },
    ],
  };

  const handleMenuItemClick = (index, name) => {
    setActiveMenuItem(index);
    sliderRef.current.slickGoTo(index);
    const h2Tags = document.querySelectorAll("h2");
    h2Tags.forEach((tag, idx) => {
      console.log("Found h2 tag with text content:", tag.textContent.trim());
      if (tag.textContent.trim() === name.trim()) {
        tag.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="sticky top-0 z-index bg-white">
        <div className="items-center justify-between pt-10">
          <Slider
            {...settings}
            ref={sliderRef}
            className="px-9 relative bottom-6"
          >
            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 0 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(0, "Maxi BOX")}
            >
              <div className="flex">
                <div className="flex space-x-1">
                  <RestaurantOutlinedIcon className="text-red-500 top-[2px] relative p-[2px]" />
                  <RamenDiningOutlinedIcon className="text-orange-500 top-[2px] relative p-[2px]" />
                </div>
                Maxi BOX
              </div>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 1 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(1, "Klab-Sendvich")} // Pass the name "Klab Sendvich"
            >
              Klab Sendvich
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 2 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(2, "Lavash")}
            >
              Lavash
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 3 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(3, "Shaurma")}
            >
              <NavLink>Shaurma</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 4 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(4, "Panini")}
            >
              <NavLink>Panini</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 5 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(5, "Burger")}
            >
              <NavLink>Burger</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 6 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(6, "Donar Kebab")}
            >
              <NavLink>Donar Kebab</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 7 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(7, "Hot-Dog")}
            >
              <NavLink>Hot Dog</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 8 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(8, "Gazaklar")}
            >
              <NavLink>Gazaklar</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 9 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(9, "Tamaddilar")}
            >
              <NavLink>Tamaddilar</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 10 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(10, "Desertlar")}
            >
              <NavLink>Desertlar</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 11 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(11, "Souslar")}
            >
              <NavLink>Souslar</NavLink>
            </button>

            <button
              className={`mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10 ${
                activeMenuItem === 12 && "text-purple-900 bg-purple-200" // Highlight active item
              }`}
              onClick={() => handleMenuItemClick(12, "Tamaddilar")}
            >
              <NavLink>Tamaddilar</NavLink>
            </button>
          </Slider>
          <button
            className="absolute bottom-[24px] transform -translate-y-1/2 rounded-full text-black focus:outline-none"
            onClick={goToPrev}
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            className="absolute bottom-[24px] right-1 transform -translate-y-1/2 rounded-full text-black focus:outline-none"
            onClick={goToNext}
          >
            <NavigateNextIcon />
          </button>
        </div>
      </div>
      <FirstFood activeMenuItem={activeMenuItem} />
    </>
  );
};
