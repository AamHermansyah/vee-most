import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import React from "react";

const LearnMore = () => {
  return (
    <div className="h-[30px] md:h-[40px] w-[150px] font-[500] p-2 rounded-full cursor-pointer bg-[#D7AA12] flex justify-center items-center text-white uppercase relative">
      <p className="ml-[20px] md:ml-[30px] hover:text-black">Learn More</p>
      <div className="absolute left-0 top-0 bg-white h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full flex items-center justify-center">
        <div className="w-[26px] md:w-[36px] h-[26px] md:h-[36px] border-dashed border-gray-400 z-40 border-[1px] rounded-full flex items-center justify-center">
          <KeyboardDoubleArrowRight
            sx={{
              color: "#D7AA12",
              fontSize: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
