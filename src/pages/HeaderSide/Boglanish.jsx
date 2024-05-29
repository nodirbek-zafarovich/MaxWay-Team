import React, { useState } from "react";
import { NavLink } from "react-router-dom/dist";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import img1 from "../../assets/img1.jpg"
import TelegramIcon from "@mui/icons-material/Telegram";

export const Boglanish = () => {
  const instagramLink = "https://www.instagram.com/maxwayuz/";

  const handleClick = () => {
    window.location.href = instagramLink;
  };

  const [count, setCount] = useState(1);
  return (
    <>
      <div className="relative bottom-0 md:top-2">
        <div className="w-[1200px] h-[1px] bg-slate-200 mt-2"></div>

        <div className="mt-8">
          <h1 className="font-bold md:text-4xl text-3xl text-gray-900 md:text-black">
            Bog'lanish
          </h1>
          <img
            src={img1}
            alt="img"
            className="w-[330px] h-[300px] mt-6 object-cover rounded-2xl md:block hidden"
          />

          <div className="w-[340px] h-[150px] bg-slate-400 rounded-2xl mt-8 md:hidden p-3">
            <h2 className="font-semibold text-xl w-[78%] pt-4 pl-1">
              Telegramda sharh qoldiring yoki savol bering
            </h2>
          </div>

          <div className="relative md:bottom-14 bottom-12 md:left-7 left-3">
            <a
              href="https://t.me/maxwaymasterfood_bot"
              className="text-white font-normal text-xl relative"
            >
              <TelegramIcon className="text-white md:text-xl text-[1px] relative bottom-[1px]" />
              @maxwaymasterfood_bot
            </a>
          </div>

          <div className="md:mt-4">
            <h2 className="font-bold md:text-black text-gray-900 md:text-[24px] text-[20px]">
              Yagona aloqa markazi
            </h2>
            <a
              href="tel:+998712005400"
              className="md:text-[19px] md:text-black text-gray-700 relative top-1"
            >
              +998712005400
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
