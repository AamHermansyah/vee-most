import React from 'react'
import PayPalPayment from '@/components/PayPalCheckout';

function Checkout() {
  return (
    <div className="flex flex-col">
      <div className="text-md font-semibold">
        <h1 className="my-3">Summary</h1>
        <div className="inset-0">
          <div className="h-[2px] w-auto bg-gray-200" />
        </div>
      </div>
      <div className="text-md font-medium">
        <h2 className="my-3">Estimate Shipping and Tax</h2>
      </div>
      <div className="mb-3">
        <label htmlFor="countries" className="font-300">
          Country
        </label>
        <select
          id="countries"
          className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
        >
          <option selected="">Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="countries" className="font-300">
          State/Province
        </label>
        <select
          id="countries"
          className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
        >
          <option selected="">Choose a state</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="countries" className="font-300">
          Zip/Postal Code
        </label>
        <input
          name="zip"
          placeholder="44167"
          className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
        />
      </div>
      <div className="mb-4 mt-4">
        <h3 className="font-300">
          Shipped by Your Account
        </h3>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-radio-1"
            className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
          >
            Your Account <b>$15,966.90</b>
          </label>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="font-300">
          Table Rate
        </h3>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-radio-1"
            className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
          >
            UPS WOrldwide Expedited <b>$26.00</b>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-radio-1"
            className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
          >
            UPS Worldwide Express Saver <b>$29.00</b>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-radio-1"
            className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
          >
            DHL Priority <b>$33.00</b>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-radio-1"
            className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
          >
            FedEx Priority <b>$35.00</b>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="default-radio-1"
            className="text-xs sm:text-base ml-4 flex items-center gap-4 font-normal text-gray-900"
          >
            EMS Speed Post <b>$51.00</b>
          </label>
        </div>
      </div>
      <div className="flex justify-between text-md font-normal">
        <p>Subtotal</p>
        <p>U$221.00</p>
      </div>
      <div className="flex justify-end text-md font-normal border-b border-gray-200">
        <p className="mt-2 mb-3">Shipping (Table Rate - UPS Worldwide Expedited)</p>
        <p className="mt-2 mb-3">U$221.00</p>
      </div>
      <div className="inset-0">
        <div className="h-[2px] w-auto bg-gray-200" />
      </div>
      <div className="text-md font-semibold flex justify-between ">
        <h1 className="mt-2 mb-3 text-gray-500">Order Total</h1>
        <h1 className="mt-2 mb-3 text-red-400">US$247.00</h1>
      </div>
      <button className="mt-4 bg-blue-500 px-4 py-3 rounded text-white hover:bg-blue-500 transition">
        Proceed to Checkout
      </button>
      <PayPalPayment className="-mt-8" />
    </div>
  )
}

export default Checkout