'use client';

import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterProducts from '@/components/pages/products/FilterProducts';

function ProductsPage() {
  return (
    <div className="flex py-10 px-10">
      <div className="basis-[30%] border-r-2 border-gray-400 pr-4">
        <FilterProducts />
      </div>
      <div className="basis-[70%] py-2 px-4">
        <h2 className="text-gray-400">
          Search results for Network Devices - Routers & Components
        </h2>
        <div className="flex gap-4 items-center justify-between">
          <button className="flex gap-4 items-center text-yellow-500 font-medium border-b-2 border-yellow-500 mt-2 py-2">
            <span className="text-lg">Products</span>
            <span className="py-1 px-2 rounded-full bg-gray-300 text-black">1278</span>
          </button>
          <div className="w-full flex gap-x-4 gap-y-2 items-center flex-auto">
            <div className="flex justify-end gap-1 w-full max-w-[200px]">
              <button className="border-2 border-gray-700 rounded mr-1">
                <FormatListBulletedIcon fontSize="large" />
              </button>
              <button className="text-gray-400">
                <GridViewIcon fontSize="large" />
              </button>
            </div>
            <div className="w-full flex items-center gap-4">
              <select
                id="countries"
                className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded-full"
              >
                <option selected="">Sort by: Relevant</option>
                <option value="US">Higher</option>
                <option value="CA">Lower</option>
              </select>
              <button className="border-2 border-gray-500 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-full">
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage