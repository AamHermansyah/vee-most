"use client";

import * as React from "react";
import { useState } from "react";
import bgHeroLeft from "../../assets/bg-hero_left.png";
import bgHero from "../../assets/bg-hero.png";
import Header from "@/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import edit from "../../assets/edit.png";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import productPicture from "../../assets/vee-store-product.png";
import trash from "../../assets/delete.png"
import save from "../../assets/floppy-disk.png"

function Checkout() {
  const [number, setNumber] = React.useState(1);

  const updateQuantity = (id, value) => {
    uniqueItemsInCart.map((item) => item.id === id) &&
      setNumber((prevState) => prevState + value);
  }
  const breadcrumbs = [
    <Typography key="1" className="font-bold text-yellow-600">
      Home
    </Typography>,
    <Typography key="2" color="text.primary" className="font-bold">
      Cart
    </Typography>,
  ];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <header className="h-[100vh] w-full relative">
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

      <div className="relative py-4">
        <Header />
      </div>

      <main className="h-screen relative z-10 mt-6">
        <div className="absolute inset-0 bg-white">
          <div className="h-[35px] absolute inset-y-0 inset-x-[10%] mt-2">
            <div className="flex justify-between items-center">
              <Stack spacing={2}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "0.75rem",
                  padding: "4px 8px",
                  borderRadius: "xl",
                  borderColor: "black",
                  color: "black",
                }}
              >
                Quick Order
              </Button>
            </div>
            <div className="flex gap-2 mt-4">
              <Typography className="font-bold text-gray-700 text-2xl">My Cart</Typography>
              <img src={edit.src} alt="Edit" className="mr-2 w-[25px] h-[25px]" />
            </div>  

            <div className="flex gap-10 mt-2 items-center justify-between">
              <div className="flex gap-5 mt-2 items-center">
                <Checkbox {...label} className="-ml-[13px]" />
                <Typography className="font-bold text-black text-md">Item Description</Typography>
              </div>
              <Typography className="font-bold text-black text-md">Unit Price</Typography>
              <Typography className="font-bold text-black text-md">Quantity</Typography>
              <Typography className="font-bold text-black text-md">Line Total</Typography>
            </div>

            <div className="mt-2">
              <div className="h-1 bg-yellow-400" />
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mt-2 items-center justify-between">
              <div className="flex gap-2 mt-2 items-center">
                <Checkbox {...label} className="-ml-[13px]" />
                <img src={productPicture.src} className="w-[100px] h-[205px]" alt="Product" />  
                <div className="flex flex-col w-[50px] sm:w-[150px] h-[175px] sm:h-[275px] items-center justify-center">
                    <Button
                    className="mr-8 mb-2 "
                    variant="outlined"
                    sx={{
                      fontSize: "0.75rem",
                      padding: "4px 8px",
                      borderRadius: "xl",
                      borderColor: "black",
                      color: "black",
                    }}
                  >
                    Spesial Price
                  </Button>
                  <Typography className="font-bold text-black text-xs ">CISCO CERT REFURB 14X10GBE LAN WANPHY INTERFACE MOD</Typography>
                  <Typography className="text-black text-xs ">
                    Cisco CRS-3 1400tt 1 OGbE LAN/WAN-PHY Interface Module - For
                    Data Networking, Optical Network - 14 x Expansion Slots - XFP -
                    Hot-swappable
                  </Typography>
                  <div className="flex gap-2 mr-8
                  ">
                    <Typography className="text-gray-700 font-bold text-xs ">
                      Direct Ship
                    </Typography>
                    <Typography className="text-red-700 font-bold text-xs ">
                      No returns
                    </Typography>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-4 -ml-20 flex-col flex-wrap" >
                  <div className="text-md font-bold mt-4">$3,319.28</div>
                </div>
              </div>
              <div>
                <div className="flex border-2 rounded-md border-gray-400">
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
              </div>
              <div>
                <div className="mr-4 flex-col flex-wrap justify-start" >
                  <div className="flex mb-16">
                    <img src={save.src} alt="Edit" className="mr-2 w-[25px] h-[25px]" />
                    <img src={trash.src} alt="Edit" className="mr-2 w-[25px] h-[25px]" />
                  </div>
                  <div className="text-md font-bold mt-4">$3,319.28</div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="h-1 bg-gray-400" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-start items-end">
                  <h2 className="font-bold">Summary: 1 Item</h2>
                  <p>Shipabie product subtotal $15,966.90</p>
                  <p>Backordered product subtotal $15,966.90</p>
                 </div>
                <div className="mt-2">
                  <div className="h-1 bg-yellow-400" />
                </div>
                <div className="flex flex-col justify-start items-end">
                  <h2 className="font-bold">Total: 1 Item</h2>
                  <p>Shipabie product subtotal $15,966.90</p>
                  <p>Backordered product subtotal $00,000.00</p>
                </div>
                <div className="flex flex-col justify-start items-end mr-10">
                  <button className="bg-yellow-500 text-white rounded-lg px-4 py-2 w-[250px] h-[50px]">Checkout</button>
                </div>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Checkout;



