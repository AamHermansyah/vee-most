import React from "react";
import LearnMore from "../LearnMore";
import Chat from "../../assets/icon-chat-bot.png";
import logo from "../../assets/logo.webp";
import Image from "next/image";
import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";

const SectionTypeOne = ({ title, desc, isVisibleLogo = false, bg }) => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="h-screen w-[90%] mx-auto">
        <div className="w-full h-[10vh] flex items-center justify-center relative">
          {isVisibleLogo && (
            <Image src={logo} alt="Logo" className="w-[300px]" />
          )}
          <div className="absolute right-0 bottom-0 flex gap-4">
            <ShoppingCartOutlined
              sx={{
                fontSize: 40,
                color: "#ffffff",
              }}
            />
            <PersonOutline
              sx={{
                fontSize: 40,
                color: "#ffffff",
              }}
            />
          </div>
        </div>
        <div className="flex h-[90vh] justify-center items-center">
          <div className="flex-[0.5] h-full flex flex-col gap-3 justify-center items-center">
            <h1 className="text-6xl font-secondary font-bold text-white text-center w-[75%] mx-auto">
              {title}
            </h1>
            <p className="font-[400] text-xl text-white text-center w-[75%] mx-auto">
              {desc}
            </p>
            <LearnMore />
          </div>
          <div className="flex-[0.5] h-full relative">
            <Image
              src={Chat}
              alt="icon"
              className="w-[75px] absolute bottom-20 right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTypeOne;
