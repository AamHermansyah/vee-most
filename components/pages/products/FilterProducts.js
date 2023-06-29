import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import CloseIcon from '@mui/icons-material/Close';

function FilterProducts() {
  return (
    <div>
      <div className="border-b-2 border-gray-400 pb-4">
        <div className="w-full flex justify-between">
          <h2 className="font-bold text-lg">
            Selected Filter
          </h2>
          <button className="text-xs flex gap-4 items-center text-gray-500">
            <span className="text-blue-500 whitespace-nowrap">
              Clear all
            </span>
            <CloseIcon />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <div className="flex flex-wrap gap-x-2 py-2 px-4 rounded-full border border-gray-700">
            <b>Category:</b>
            <span>Network Devices</span>
          </div>
          <div className="flex flex-wrap gap-x-2 py-2 px-4 rounded-full border border-gray-700">
            <b>Sub Category:</b>
            <span>Router & Components</span>
          </div>
        </div>
      </div>
      <div>
        <button className="w-full flex justify-between my-2 items-center">
          <span>
            <b>Category:</b> Network Devices
          </span>
          <KeyboardArrowUpIcon />
        </button>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg  
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Category"
            required=""
          />
        </div>
        <div className="px-2 border-b-2 border-gray-400">
          {['Network Devices (47510)', 'Computer (2)', 'Acceccoris (27337)', 'Audio/Video Devices (535)', 'Cabbles (498030)']
            .map((title, index) => (
              <div key={title} className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultChecked={index === 0}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {title}
                </label>
              </div>
            )
          )}
          <button className="font-bold text-blue-500">
            See more (22)
          </button>
        </div>
      </div>
      <div>
        <button className="w-full flex justify-between my-2 items-center">
          <span className="block text-left">
            <b>Sub Category:</b> Routers & Components
          </span>
          <KeyboardArrowUpIcon />
        </button>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg  
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Sub Category"
            required=""
          />
        </div>
        <div className="px-2 border-b-2 border-gray-400">
          {['Routers & Components (4568)', 'Hardware (3)']
            .map((title, index) => (
              <div key={title} className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={index === 0}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {title}
                </label>
              </div>
            )
          )}
          <button className="font-bold text-blue-500">
            See more (22)
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterProducts