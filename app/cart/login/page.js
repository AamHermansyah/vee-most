"use client"

import * as React from "react";
import profile from "@/assets//profile.png"
import products from "@/assets//white-product.png";
import Header from "@/components/Header";
import PaymentPage from "@/components/payment/page";
import ShippingPage from "@/components/shipping/page";
import { useState } from "react";
import Footer from "@/components/Footer";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
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
              <img src={profile.src} alt="profile" className="max-w-[25px] max-h-[25px]" />
              <button className="w-[75px] h-[25px] bg-yellow-400 rounded-full " onClick={handleLogin}>
                <h1 className="font-bold text-md text-white ">
                  Login
                </h1>
              </button>
            </div>
            {isLoggedIn && (
              <div className="m-2">
                {/* form input */}
                <div className="mb-2 lg:w-1/4 sm:w-1/2 md:w-1/2">
                  <label htmlFor="username" className="font-300">Username</label>
                  <input
                    name="username"
                    placeholder="username"
                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                  />
                </div>
                <div className="lg:w-1/4 sm:w-1/2 md:w-1/2">
                  <label htmlFor="password" className="font-300">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="********"
                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col-reverse sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <h2 className="font-bold my-4">
                  Shipping Address
                </h2>
                <div className="lg:grid grid-cols-2 gap-4">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="font-300">
                      First Name *
                    </label>
                    <input
                      name="firstname"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="font-300">
                      Last Name *
                    </label>
                    <input
                      name="lastname"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="font-300">
                      Street Address *
                    </label>
                    <input
                      name="address"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
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
                    <label htmlFor="city" className="font-300">
                      City *
                    </label>
                    <input
                      name="city"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zip" className="font-300">
                      Zip/Postal Code *
                    </label>
                    <input
                      name="zip"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="font-300">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company" className="font-300">
                      Company
                    </label>
                    <input
                      name="company"
                      placeholder="44167"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2"
                    />
                  </div>
                  <div className="col-span-2">
                    <button className="bg-yellow-400 rounded py-2 px-4 mt-4 text-white">
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
        <Footer />
      </div>
    </>
  );
};

export default Login;