import React from "react";
import QuickQuote from "./QuickQuote";
import Image from "next/image";
import icon from "../../../assets/icon_5.png";
import bg2 from "../../../assets/bg2.jpeg";
import bg3 from "../../../assets/bg_3.png";
import bg4 from "../../../assets/bgs4.png";
import bg5 from "../../../assets/bgs5.png";
import bg6 from "../../../assets/bgs6.png";
import bg7 from "../../../assets/bgs7.png";
import bg1 from "../../../assets/bg1.png";

const products = [
  {
    id: 1,
    title: "Firewalls",
  },
  {
    id: 2,
    title: "Routers",
  },
  {
    id: 3,
    title: "Switch",
  },
  {
    id: 4,
    title: "Servers",
  },
  {
    id: 5,
    title: "Storage",
  },
  {
    id: 6,
    title: "Wireless",
  },
];

const AllProductSection = () => {
  return (
    <section
      className="relative px-4 w-full h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-10"
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      // }}
    >
      <p className="text-[14px] lg:text-[20px] text-[#737373] font-[400]">
        choose wisely, succeed effortlessly
      </p>
      <h1 className="text-4xl lg:text-6xl w-full lg:w-[65%] mx-auto text-center font-bold font-secondary text-black">
        Stay ahead of the curve with cutting-edge IT products, power your
        success today
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-20 relative">
        {products.map((item) => (
          <p key={item.id} className="text-[16px] font-[500]">
            {item.title}
          </p>
        ))}
        <Image
          src={icon}
          alt="icon"
          className="absolute left-0 -top-8 lg:top-0 lg:-left-10 w-[20px] lg:w-[30px]"
        />
      </div>
      <QuickQuote title={"All Products"} />
      <Image
        src={bg2}
        alt="icon"
        className="absolute right-0 bottom-[20%] lg:bottom-[40%] w-[80px] sm:w-[100px] lg:w-[200px]"
      />
      <Image
        src={bg3}
        alt="icon"
        className="absolute right-10 lg:right-40 bottom-10 w-[80px] sm:w-[100px] lg:w-[200px]"
      />
      <Image
        src={bg4}
        alt="icon"
        className="absolute right-[40%] bottom-5 w-[80px] sm:w-[100px] lg:w-[150px]"
      />
      <Image
        src={bg5}
        alt="icon"
        className="absolute left-10 lg:left-40 bottom-10 w-[80px] sm:w-[100px] lg:w-[200px]"
      />
      <Image
        src={bg6}
        alt="icon"
        className="absolute left-0 bottom-[20%] lg:bottom-[40%] w-[80px] sm:w-[100px] lg:w-[150px]"
      />
      <Image
        src={bg1}
        alt="icon"
        className="absolute right-0 top-0 w-[100px] md:w-[200px] lg:w-[300px]"
      />
      <Image
        src={bg7}
        alt="icon"
        className="absolute left-0 top-0 w-[200px] md:w-[300px] lg:w-[400px]"
      />
    </section>
  );
};

export default AllProductSection;
