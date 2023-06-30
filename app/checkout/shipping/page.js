"use client"

import * as React from "react";
import profile from "../../../assets/profile.png"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Header from "@/components/Header";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Shipping = () => {

  return (
    <>
      <Header isNavFooterShow={true} />
      <div className="min-h-screen z-10 mt-6">
        <div className="w-full bg-white sm:px-10 max-w-[1000px]">
          <div className="sm:mt-16 md:mt-16 lg:mt-0 h-full gap-1 p-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">
                Checkout
              </h1>
              <div className="flex items-center gap-2">
                <img src={profile.src} alt="profile" className="max-w-[25px] max-h-[25px]" />
                <button className="w-[75px] h-[25px] bg-yellow-500 rounded-full">
                  <h1 className="font-bold text-md text-white">
                    Login
                  </h1>
                </button>
              </div>
              <div className="w-full h-auto flex flex-col pb-2 sm:pb-4 mt-8 border-b-2 border-gray-700">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-lg sm:text-xl sm:ml-4">
                    Shipping Methods
                  </h1>
                  <h2 className="text-xs sm:text-base">
                    Total Weight: 105 kg
                  </h2>
                </div>
              </div>
              <div className="w-full overflow-x-auto">
                <div className="w-full min-w-[600px]">
                  {['0', '842', '954', '996', '1,135'].map((price, index) => (
                    <div key={index} className="flex items-center justify-between border-b-2 border-gray-700 px-2">
                      <div className="lg:w-[200px]">
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={`US$${price}.00`}
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio />} label={`US$${price}.00`} />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div>
                        <h3 className="flex-auto">
                          Shipped by Your Account
                        </h3>
                      </div>
                      <div className="lg:w-[200px]">
                        <h3>
                          Your Account
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-around mt-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{ paddingLeft: 0 }}
                    />
                    US$1,389.78
                  </h3>
                  <p className="text-red-500 font-700 text-sm">
                    Insurance Fee
                  </p>
                </div>
                <h3 className="font-200 text-sm">
                  Min US$10.00 or 1.8% of items
                </h3>
              </div>
              <div className="flex justify-end mr-4 mt-4 md:mt-2">
                <button className="bg-blue-400 w-[150px] py-2 rounded-md">
                  <h2 className="text-white text-center text-xl">
                    Next
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
