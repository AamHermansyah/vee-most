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
            <div className="h-full gap-1 p-4">
              <div className="" >
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


              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;