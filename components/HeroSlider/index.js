"use client";

import React from "react";
import Image from "next/image";
import LearnMore from "../LearnMore";

const HeroSlider = ({ item }) => {
  return (
    <div
      className={[
        "bg-no-repeat bg-cover w-full min-h-[75vh] lg:h-[75vh]",
        item.isActive ? "absolute z-10" : "hidden",
        item.position ? item.position : "bg-center",
      ].join(" ")}
      style={{
        backgroundImage:
          item.isVisibleBackground && `url(${item.background.src})`,
      }}
    >
      <div
        className={[
          "w-full h-full flex items-center justify-between gap-y-10 lg:gap-y-0",
          item.isLeft
            ? "flex-col lg:flex-row-reverse"
            : "flex-col-reverse lg:flex-row",
        ].join(" ")}
      >
        <div
          className={[
            "flex-[0.5] h-full flex items-center justify-center",
          ].join(" ")}
        >
          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-[50%] lg:w-full mx-20"
            />
          )}
        </div>
        <div className="flex-[0.5] h-full flex flex-col items-center justify-center gap-4">
          <h1
            className={[
              "text-3xl lg:text-6xl font-secondary font-bold text-center w-[75%] mx-auto",
              item.imageUrl ? "text-black" : "text-white",
            ].join(" ")}
          >
            {item.title}
          </h1>
          <p
            className={[
              "font-[400] text-lg lg:text-2xl text-center w-[75%] mx-auto",
              item.imageUrl ? "text-black" : "text-white",
            ].join(" ")}
          >
            {item.desc}
          </p>
          <div className="w-full flex items-center justify-center">
            <LearnMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
