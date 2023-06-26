"use client";

import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import Image from "next/image";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import LearnMore from "../LearnMore";

const HeroSlider = ({ imageToDisplay, setImageToDisplay }) => {
  return (
    <div className="h-full relative">
      <div className="flex items-center justify-center w-full h-full">
        {imageToDisplay.map((item) => (
          <div
            className={[
              "items-start justify-evenly w-full",
              item.isActive ? "flex" : "hidden",
            ].join(" ")}
            key={item.id}
          >
            {item.id % 2 === 0 ? (
              <>
                <div className="flex-[0.5] flex flex-col items-center justify-center gap-4">
                  <h2
                    className={[
                      "text-[50px] font-bold text-center leading-[50px]",
                    ].join(" ")}
                  >
                    {item.title}
                  </h2>
                  <h5 className="w-[350px] text-[20px] font-[400] text-center">
                    {item.desc}
                  </h5>
                  <div>
                    <div className="h-[30px] w-[150px] font-[500] p-2 rounded-full bg-[#D7AA12] flex justify-center items-center text-white uppercase relative">
                      <p className="ml-[20px]">Learn More</p>
                      <div className="absolute animate-pulse left-0 top-0 bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                        <KeyboardDoubleArrowRight
                          sx={{
                            color: "#D7AA12",
                            fontSize: 20,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={item.imageUrl}
                  className={["flex-[0.5]"]}
                  width={600}
                  height={600}
                  alt="hero-image"
                />
              </>
            ) : (
              <>
                <Image
                  src={item.imageUrl}
                  className={["flex-[0.5]"]}
                  width={600}
                  height={600}
                  alt="hero-image"
                />
                <div className="flex-[0.5] flex flex-col items-center justify-center gap-4">
                  <h2
                    className={[
                      "text-[50px] font-bold text-center leading-[50px]",
                    ].join(" ")}
                  >
                    {item.title}
                  </h2>
                  <h5 className="w-[350px] text-[20px] font-[400] text-center">
                    {item.desc}
                  </h5>
                  <div>
                    <LearnMore />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 left-0 w-full flex items-center justify-start gap-4">
        {imageToDisplay.map((item) => (
          <Dot
            key={item.id}
            item={item}
            setImageToDisplay={setImageToDisplay}
            imageToDisplay={imageToDisplay}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
