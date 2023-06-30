"use client"

import * as React from "react";
import profile from "../../../assets/profile.png"
import products from "../../../assets/white-product.png";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from "@/components/Header";

const Login = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header isNavFooterHidden={true} />
      <div className="min-h-screen mt-6">
        <div className="bg-white">
          <div className="p-4 md:p-8 lg:p-12 S">
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
            <div className="flex flex-col-reverse sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <h2 className="font-bold my-4">
                  Shipping Address
                </h2>
                <div className="lg:grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <h3 className="font-300">
                      First Name *
                    </h3>
                    <TextField className="w-full" id="outlined-basic"  placeholder="Ethan" variant="outlined" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-300">
                      Last Name *
                    </h3>
                    <TextField className="w-full" id="outlined-basic"  placeholder="Osuji" variant="outlined" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-300">
                      Street Address *
                    </h3>
                    <TextField className="w-full" id="outlined-basic" variant="outlined" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-300">
                      Country *
                    </h3>
                    <FormControl fullWidth className="w-full">
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
                  <div className="mb-2">
                    <h3 className="font-300">
                      State/Province*
                    </h3>
                    <FormControl fullWidth className="w-full">
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
                  <div className="mb-2">
                    <h3 className="font-300">
                      City *
                    </h3>
                    <TextField className="w-full" id="outlined-basic"   variant="outlined" />
                  </div>
                  <div className="mb-2">
                  <h3 className="font-300">
                      Zip/Postal Code *
                    </h3>
                    <TextField className="w-full" id="outlined-basic" variant="outlined" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-300">
                      Phone Number *
                    </h3>
                    <TextField className="w-full" id="outlined-basic" variant="outlined" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-300">
                      Company 
                    </h3>
                    <TextField className="w-full" id="outlined-basic"  variant="outlined" />
                  </div>
                  <div className="col-span-2">
                    <button className="bg-yellow-500 rounded py-2 px-4 mt-4">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col bg-gray-300 p-4 my-2 min-h-[215px] max-h-[450px]">
                  <h2 className="font-bold mb-4">
                    Order Summary
                  </h2>
                  <h2 className="font-bold text-sm border-b-2 border-gray-400 mb-2">
                    1 Item in Cart
                  </h2>
                  <div className="flex my-4 justify-around">
                    <img src={products.src} alt="product" className="w-[70px] h-[70px]" />
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
                    <div className="text-sm font-400">
                        US$77,210.00
                    </div>
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