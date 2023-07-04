"use client";
import React from "react";

const QuickQuote = ({ title, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-center rounded-full p-1">
        <div className="bg-[#D7AA12] hover:text-black p-2 rounded-full text-white text-[14px] h-[31px] flex items-center justify-center whitespace-nowrap">
          {title}
        </div>
      </div>
      <div className="w-[108px] h-[40px] -z-20 absolute top-0 right-0 bg-[#D7AA12] rounded-full" />
      <div className="w-[108px] h-[36px] -z-20 absolute top-[2px] right-[2px] bg-[#ffffff] rounded-full" />
      <div className="w-[80px] h-[40px] -z-10 absolute top-0 right-[20px] bg-[#ffffff]" />
    </div>
  );
};

export default QuickQuote;
