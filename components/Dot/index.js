"use client";

import React from "react";

const Dot = ({ item, imageToDisplay, setImageToDisplay }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const _temp = [...imageToDisplay];
    _temp.forEach((data) => {
      if (data.id === item.id) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
    });
    setImageToDisplay(_temp);
  };

  return (
    <div
      className={[
        "w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] rounded-full cursor-pointer",
        item.isActive ? "bg-[#D7AA12]" : "bg-[#eeeeee]",
      ].join(" ")}
      onClick={handleClick}
    />
  );
};

export default Dot;
