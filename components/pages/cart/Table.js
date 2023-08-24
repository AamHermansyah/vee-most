import { Typography } from '@mui/material'
import { Checkbox } from 'flowbite-react'
import React from 'react'

import productPicture from "@/assets/vee-store-product.png";
import trash from "@/assets/delete.png"
import save from "@/assets/floppy-disk.png"

function Table() {
  const [qty, setQty] = React.useState(1);

  return (
    <div className="w-full">
      <table className="min-w-[900px] w-full text-sm text-left text-gray-500 border-b-[4px] border-yellow-400">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className="font-bold text-black text-md border-b-[4px] border-yellow-400">
            <th scope="col" className="px-6 py-3">
              <Checkbox />
            </th>
            <th scope="col" className="px-6 py-3">
              Item Description
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">
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
            <th scope="row" className="px-6 py-4">
              <Checkbox />
            </th>
            <td className="w-full flex gap-2 px-6 py-4">
              <img src={productPicture.src} className="w-[100px] h-[205px]" alt="Product" />
              <div className="w-full flex flex-col items-start justify-center">
                <span className="inline-block text-xs px-1.5 py-1 rounded-full border border-gray-700 mb-1 uppercase text-gray-700">
                  Special Price
                </span>
                <h2 className="font-semibold text-black text-xs mt-2 mb-1">CISCO CERT REFURB 14X10GBE LAN WANPHY INTERFACE MOD</h2>
                <p className="text-black text-xs ">
                  Cisco CRS-3 14-port 10GbE LAN/WAN-PHY Interface Module - For
                  Data Networking, Optical Network - 14 x Expansion Slots - XFP -
                  Hot-swappable
                </p>
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
            <td className="px-6 py-4 text-black font-bold">$3,319.28</td>
            <td className="px-6 py-4">
              <div className="w-max flex border-2 rounded-md border-gray-400">
                <button
                  onClick={() => setQty((prev) => prev - 1)}
                  className="px-2 py-1 text-gray-700 bg-gray-100"
                >
                  -
                </button>
                <input
                  name="qty"
                  className="text-center w-[50px] px-2 py-1 border-r-2 border-l-2 border-solid border-slate-100"
                  readOnly
                  value={qty}
                />
                <button
                  onClick={() => setQty((prev) => prev + 1)}
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
                <div className="text-md text-black font-bold mt-4">$3,319.28</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table