"use client";

import React from "react";
import Image from "next/image";
import LearnMore from "../LearnMore";

const HeroSlider = ({ item }) => {
  return (
    <div
      className={[
        "bg-no-repeat bg-cover w-full h-[85vh] lg:h-[80vh]",
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
          "w-full h-full flex items-center justify-center lg:justify-between gap-y-4 lg:gap-y-0",
          item.isLeft
            ? "flex-col lg:flex-row-reverse"
            : "flex-col-reverse lg:flex-row",
        ].join(" ")}
      >
        <div
          className={[
            "flex-[0.5] h-full lg:items-center justify-center",
            item.isVisibleBackground ? "hidden" : "flex",
            item.isLeft ? "items-center" : "items-start",
          ].join(" ")}
        >
          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-[50%] lg:w-full mx-20 -z-10"
            />
          )}
        </div>
        <div
          className={[
            "flex-[0.5] h-full flex flex-col items-center lg:justify-center gap-4 w-[90%] mx-auto",
            item.isLeft ? "justify-start" : "justify-center",
          ].join(" ")}
        >
          <h1
            className={[
              "text-4xl lg:text-6xl font-secondary font-bold text-center w-full lg:w-[75%] mx-auto",
              item.imageUrl ? "text-black" : "text-white",
            ].join(" ")}
          >
            {item.title}
          </h1>
          <p
            className={[
              "font-[400] text-xl lg:text-2xl text-center w-full lg:w-[75%] mx-auto",
              item.imageUrl ? "text-black" : "text-white",
            ].join(" ")}
          >
            <span
              className={[
                item.imageUrl
                  ? ""
                  : "bg-black rounded-lg py-1 box-decoration-clone px-2",
              ].join(" ")}
            >
              {item.desc}
            </span>
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
