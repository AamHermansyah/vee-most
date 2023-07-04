"use client";

import * as React from "react";
import Header from "@/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
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

  return (
    <>
      <Header isNavFooterHidden={true} />
      <main className="min-h-screen mt-6">
        <div className="bg-white">
          <div className="py-10 px-4 sm:px-10">
            <div className="max-w-[1000px] mx-auto">
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
              </div>  
            </div>
            <div className="flex justify-between">
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
            <div className="basis-[30%] w-full h-full bg-red-700">
                  
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkout;



