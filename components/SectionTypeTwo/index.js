import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../assets/VeeMost_Smart_Store.png";
import icon_1 from "../../assets/icon_1.webp";
import icon_2 from "../../assets/icon_2.webp";
import icon_3 from "../../assets/icon_3.webp";
import React from "react";

const image_content = [
  {
    id: 1,
    icon: icon_1,
    title: "Tech Support",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Tech Deals",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Track Order",
  },
];

const SectionTypeTwo = ({ isVisibleLogo = false, title, desc }) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center mt-2">
      <div className="w-full h-full px-14">
        <div className="w-full h-[200px] flex items-center lg:justify-center relative">
          {isVisibleLogo && (
            <Image src={logo} alt="Logo" className="w-[50%] lg:w-[300px]" />
          )}
          <div className="absolute flex gap-4 justify-end items-center right-0">
            <ShoppingCartOutlined
              sx={{
                fontSize: 40,
                color: "#000000",
              }}
              className="text-[30px] lg:text-[40px] hover:text-[#D7AA12] cursor-pointer"
            />
            <PersonOutline
              sx={{
                fontSize: 40,
                color: "#000000",
              }}
              className="text-[30px] lg:text-[40px] hover:text-[#D7AA12] cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full min-h-[85vh] flex flex-col items-center justify-center gap-20">
          <h1 className="text-6xl font-secondary font-bold text-black text-center">
            {title}
          </h1>
          <div className="w-full flex justify-around items-center flex-wrap gap-4 lg:gap-0">
            {image_content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-4"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-[50%] lg:w-[150px]"
                />
                <p className="text-lg lg:text-xl text-black font-[400] font-primary">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <h4 className="text-2xl font-primary w-full max-w-[600px] mx-auto font-[400] text-black text-center">
            {desc}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SectionTypeTwo;
