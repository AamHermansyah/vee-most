"use client";

import * as React from "react";
import Header from "@/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Checkbox from "@mui/material/Checkbox";
import productPicture from "../../assets/vee-store-product.png";
import trash from "../../assets/delete.png"
import save from "../../assets/floppy-disk.png"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PayPalPayment from '@/components/PayPalCheckout';
import { Button } from "@mui/material";
import Footer from "@/components/Footer";


function Checkout() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [number, setNumber] = React.useState(1);

  const updateQuantity = (id, value) => {
    uniqueItemsInCart.map((item) => item.id === id) &&
      setNumber((prevState) => prevState + value);
  }
  const breadcrumbs = [
    <h1 key="1" className="font-bold text-yellow-600">
      Home
    </h1>,
    <h1 key="2" color="text.primary" className="font-bold">
      Cart
    </h1>,
  ];

  return (
    <>
      <Header isNavFooterHidden={true} />
      <main className="min-h-screen mt-6">
        <div className="bg-white">
          <div className="py-10 px-4 sm:px-10">
            <div className="max-w-[1000px] ml-6 border-2">
              <div className="flex justify-between items-center">
                <Stack spacing={2}>
                  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbs}
                  </Breadcrumbs>
                </Stack>
              </div>
              
              <div className="flex gap-2 mt-4">
                <h1 className="font-bold text-gray-700 text-2xl">My Cart</h1>
              </div>  
            </div>
            <div className="flex justify-between sm:flex-col md:flex-col lg:flex-row">
            <div className="max-w-[1000px] mx-auto relative overflow-x-auto basis-[70%]">
              <table className="min-w-[900px] w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                  <tr className="font-bold text-black text-md border-b-[4px] border-yellow-500">
                    <th scope="col" className="px-6 py-3">
                      <Checkbox />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Line Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b-2">
                    <th
                      scope="row"
                      className="px-6 py-4"
                    >
                      <Checkbox />
                    </th>
                    <td className="w-full flex gap-2 px-6 py-4">
                      <img src={productPicture.src} className="w-[100px] h-[205px]" alt="Product" />  
                      <div className="w-full flex flex-col items-start justify-center">
                        <span className="inline-block text-xs px-1.5 py-1 rounded-full border border-gray-700 mb-1 uppercase text-gray-700">
                          Special Price
                        </span>
                        <Typography className="font-bold text-black text-xs mt-2">CISCO CERT REFURB 14X10GBE LAN WANPHY INTERFACE MOD</Typography>
                        <Typography className="text-black text-xs ">
                          Cisco CRS-3 1400tt 1 OGbE LAN/WAN-PHY Interface Module - For
                          Data Networking, Optical Network - 14 x Expansion Slots - XFP -
                          Hot-swappable
                        </Typography>
                        <div className="flex items-center gap-2 mr-8 mt-2">
                          <Typography className="py-1 px-2 rounded-full bg-green-100 font-bold text-xs text-green-800">
                            Direct Ship
                          </Typography>
                          <Typography className="text-red-700 font-bold text-xs ">
                            No returns
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">$3,319.28</td>
                    <td className="px-6 py-4">
                      <div className="w-max flex border-2 rounded-md border-gray-400">
                        <button
                          onClick={() => updateQuantity(id, -1)}
                          className="px-2 py-1 text-gray-700 bg-gray-100"
                        >
                          -
                        </button>
                        <p className="px-2 py-1 border-r-2 border-l-2 border-solid border-slate-100">
                          {number}
                        </p>
                        <button
                          onClick={() => updateQuantity(id, 1)}
                          className="px-2 py-1 text-gray-700 bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="mr-4 flex-col flex-wrap justify-start" >
                        <div className="flex">
                          <img src={save.src} alt="Save" className="mr-2 w-[25px] h-[25px]" />
                          <img src={trash.src} alt="Trash" className="mr-2 w-[25px] h-[25px]" />
                        </div>
                        <div className="text-md font-bold mt-4">$3,319.28</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="inset-0">
                <div className="h-1 bg-yellow-400" />
              </div>
            </div>
            <div className="basis-[30%] w-full h-auto mx-8 lg:-mt-16 sm:mt-0 md:mt-0 ">
              <div className="flex flex-col">
                <div className="text-md font-semibold">
                  <h1 className="mt-2 ml-3 mb-2">Summary</h1>
                  <div className="inset-0">
                    <div className="h-[2px] w-auto bg-gray-200" />
                  </div>
                </div>
                <div className="text-md font-medium">
                  <h2 className="mt-2 ml-3 mb-2">Estimate Shipping and Tax</h2>
                </div>
                <div className="mb-2 mx-4">
                    <h3 className="font-300">
                      Country 
                    </h3>
                    <FormControl fullWidth className="w-full">
                      <InputLabel id="demo-simple-select-label">United States</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholderl="Country"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                <div className="mb-2 mx-4">
                    <h3 className="font-300">
                      State/Province
                    </h3>
                    <FormControl fullWidth className="w-full">
                      <InputLabel id="demo-simple-select-label">Ohio</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholderl="Country"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="mb-2 mx-4">
                    <h3 className="font-300">
                      Zip/Postal Code
                    </h3>
                    <TextField className="w-full" id="outlined-basic"  placeholder="44311" variant="outlined" />
                  </div>
                  <div className="mb-4 mx-4 mt-4">
                    <h3 className="font-300">
                      Shipped by Your Account
                    </h3>
                    <div className="flex">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
                      >
                        Your Account
                        <p className="font-bold -ml-2 text-sm">
                        $15,966.90
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="mb-2 mx-4">
                    <h3 className="font-300">
                      Table Rate
                    </h3>
                    <div className="flex">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
                      >
                        UPS WOrldwide Expedited 
                        <p className="font-bold -ml-2 text-sm">
                        $26.00
                        </p>
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
                      >
                        UPS Worldwide Express Saver
                        <p className="font-bold -ml-2 text-sm">
                        $29.00
                        </p>
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
                      >
                        DHL Priority
                        <p className="font-bold -ml-2 text-sm">
                        $33.00
                        </p>
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
                      >
                        FedEx Priority
                        <p className="font-bold -ml-2 text-sm">
                        $35.00
                        </p>
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
                      >
                        EMS Speed Post
                        <p className="font-bold -ml-2 text-sm">
                        $51.00
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between text-md font-normal">
                    <p className="mt-2 ml-3 mb-2">Subtotal</p>
                    <p className="mt-2 ml-3 mb-2">U$221.00</p>
                  </div>
                  <div className="flex justify-end text-md font-normal">
                    <p className="mt-2 ml-3 mb-2">Shipping (Table Rate - UPS Worldwide Expedited) "</p>
                    <p className="mt-2 ml-3 mb-2">U$221.00</p>
                    <div className="inset-0">
                      <div className="h-[2px] w-auto bg-gray-200" />
                    </div>
                  </div>
                  <div className="inset-0">
                    <div className="h-[2px] w-auto bg-gray-200" />
                  </div>
                  <div className="text-md font-semibold flex justify-between ">
                    <h1 className="mt-2 ml-3 mb-2 text-gray-500">Order Total</h1>
                    <h1 className="mt-2 ml-3 mb-2 text-red-400">US$247.00</h1>
                  </div>
                  <Button variant="contained" color="primary">
                    Proceed to Checkout
                  </Button>
                  <PayPalPayment className="-mt-8" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Checkout;



