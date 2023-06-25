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
        "w-[20px] h-[20px] rounded-full cursor-pointer",
        item.isActive ? "bg-[#D7AA12]" : "bg-[#868686]",
      ].join(" ")}
      onClick={handleClick}
    />
  );
};

export default Dot;
