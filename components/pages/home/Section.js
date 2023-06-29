import React from "react";
import QuickQuote from "../../QuickQuote";
import Image from "next/image";
import icon from "../../../assets/icon_5.png";

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
    <section className="w-[90%] mx-auto h-screen flex flex-col items-center justify-center gap-10 ">
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
    </section>
  );
};

export default AllProductSection;
