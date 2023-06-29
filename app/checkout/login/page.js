"use client"

import * as React from "react";
import bgHeroLeft from "../../../assets/bg-hero_left.png";
import bgHero from "../../../assets/bg-hero.png";
import Hero from "@/components/Hero";
import profile from "../../../assets/profile.png"
import products from "../../../assets/white-product.png";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Login = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden">
        <div
          className={["absolute w-full h-full bg-no-repeat top-0 left-0 opacity-30"].join(" ")}
          style={{
            backgroundImage: `url(${bgHeroLeft.src})`,
          }}
        />
        <div
          className={["absolute w-full h-full bg-no-repeat top-0 right-[-400px] opacity-30"].join(" ")}
          style={{
            backgroundImage: `url(${bgHero.src})`,
          }}
        />
        <div className="relative">
          <Hero />
        </div>
        <div className="h-screen relative z-10 mt-6">
          <div className="bg-white absolute inset-0">
            <div className="sm:mt-16 md:mt-16 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-8 h-full gap-1 p-4 md:p-8 lg:p-12 S">
              <div className="w-col-span-1 md:col-span-2 lg:col-span-4 row-span-1 " >
                <div className="flex flex-col">
                  <h1 className="font-bold">
                    Checkout
                  </h1>
                  <div className="flex items-center gap-2">
                    <img src={profile.src} alt="profile" className="max-w-[25px] max-h-[25px]"/>
                    <button className="w-[75px] h-[25px] bg-yellow-500 rounded-full">
                      <h1 className="font-bold text-md text-white ">
                        Login
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 ">
                <h2 className="font-bold">
                  Shipping Address
                </h2>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-6 ">
                <div className="flex flex-col bg-gray-300 mx-6 my-2 px-4 min-h-[215px] max-h-[450px]">
                <h2 className="font-bold mb-4">
                  Order Summary
                </h2>
                <h2 className="font-bold text-sm border-b-2 border-gray-900 mb-2">
                  1 Item in Cart
                </h2>
                <div className="flex items-center my-4 justify-around">
                  <img src={products.src} alt="product" className="w-[100px] h-[100px]" />
                  <div className="flex flex-col">
                    <p className="text-md">
                      C9300-48S-A
                    </p>
                    <p className="text-sm font-200 text-gray-600">
                      Qty : 5
                    </p>
                    <p className="text-sm">
                      View Details  
                    </p>
                  </div>
                  <div className="font-400">
                      US$77,210.00
                  </div>
                </div>
                </div>
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  First Name *
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic"  placeholder="Ethan" variant="outlined" />
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  Last Name *
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic"  placeholder="Osuji" variant="outlined" />
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  Street Address *
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic" variant="outlined" />
              </div>
              <div className="col-span-1 row-span-1 ">
                
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  Country *
                </h3>
                <FormControl fullWidth className="flex w-[90%] h-auto justify-center mx-auto">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    placeholderl="Country"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  State/Province*
                </h3>
                <FormControl fullWidth className="flex w-[90%] h-auto justify-center mx-auto">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    placeholder="Please Select a region, state, or province"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  City *
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic"   variant="outlined" />
              </div>
              <div className="col-span-1 row-span-1 ">
              <h3 className="ml-2 font-300">
                  Zip/Postal Code *
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic" variant="outlined" />
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  Phone Number *
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic" variant="outlined" />
              </div>
              <div className="col-span-1 row-span-1 ">
                <h3 className="ml-2 font-300">
                  Company 
                </h3>
                <TextField className="flex w-[90%] h-auto justify-center mx-auto" id="outlined-basic"  variant="outlined" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;