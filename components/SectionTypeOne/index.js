import React from "react";
import LearnMore from "../pages/home/LearnMore";
import Chat from "@/assets/icon-chat-bot.png";
import logo from "@/assets/logo.webp";
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
      <div className="h-screen w-[90%] mx-auto relative">
        <div className="w-full h-[10vh] flex items-center justify-start lg:justify-center relative">
          {isVisibleLogo && (
            <Image src={logo} alt="Logo" className="w-[50%] lg:w-[300px]" />
          )}
          <div className="absolute right-0 bottom-0 flex gap-4">
            <ShoppingCartOutlined
              sx={{
                fontSize: 40,
                color: "#ffffff",
              }}
              className="hover:text-[#D7AA12] cursor-pointer"
            />
            <PersonOutline
              sx={{
                fontSize: 40,
                color: "#ffffff",
              }}
              className="hover:text-[#D7AA12] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex h-[90vh] justify-center lg:justify-start items-center w-[90%] mx-auto">
          <div className="lg:flex-[0.5] w-full h-full flex flex-col gap-3 justify-center items-center">
            <h1 className="text-4xl lg:text-6xl font-secondary font-bold text-white text-center w-full lg:w-[75%] mx-auto">
              {title}
            </h1>
            <p className="font-[400] text-lg lg:text-xl text-white text-center w-full lg:w-[75%] mx-auto">
              {desc}
            </p>
            <LearnMore />
          </div>
        </div>
        <Image
          src={Chat}
          alt="icon"
          className="w-[50px] lg:w-[75px] absolute bottom-20 right-0 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default SectionTypeOne;
