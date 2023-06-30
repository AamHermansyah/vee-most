import React from "react";
import QuickQuote from "../QuickQuote";
import Image from "next/image";
import icon from "../../assets/icon_5.png";
import bg2 from "../../assets/bg2.jpeg";
import bg3 from "../../assets/bg_3.png";
import bg4 from "../../assets/bgs4.png";
import bg5 from "../../assets/bgs5.png";
import bg6 from "../../assets/bgs6.png";
import bg7 from "../../assets/bgs7.png";
import bg1 from "../../assets/bg1.png";
import CardProduct from "../CardProduct";

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
    <section className="relative px-4 w-full py-10 bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-10">
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
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 grid-cols-2 md:grid-cols-4">
        <CardProduct
          data={{
            name: "Power Edge",
            image: bg2,
            price: "50000",
          }}
        />
        <CardProduct
          data={{
            name: "Router",
            image: bg6,
            price: "50000",
          }}
        />
        <CardProduct
          data={{
            name: "Monitor",
            image: bg3,
            price: "50000",
          }}
        />
        <CardProduct
          data={{
            name: "Phone",
            image: bg4,
            price: "50000",
          }}
        />
        <CardProduct
          data={{
            name: "Switch",
            image: bg5,
            price: "50000",
          }}
        />
      </div>
      <Image
        src={bg1}
        alt="icon"
        className="absolute right-0 top-0 w-[100px] md:w-[100px] lg:w-[200px] hidden lg:block"
      />
      <Image
        src={bg7}
        alt="icon"
        className="absolute left-0 top-0 w-[100px] lg:w-[200px] hidden lg:block"
      />
    </section>
  );
};

export default AllProductSection;
