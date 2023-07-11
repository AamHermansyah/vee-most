'use client';

import Header from '@/components/Header';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PayPalPayment from '@/components/PayPalCheckout';
import products from "../../assets/white-product.png";

function PaymentPage() {
  return (
    <div>
      <div className="py-10 px-4 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row gap-y-10">
          <div className="basis-[65%]">
            <div className="flex justify-between flex-wrap gap-y-6 sm:gap-y-10">
              <h1 className="text-3xl font-bold">Checkout</h1>
              <div className="flex items-center">
                <div>
                  <div className="relative w-[150px] sm:w-[200px] h-[5px] sm:h-2 rounded-l-full bg-gray-200">
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[40px] sm:w-[50px] p-1 sm:p-2 aspect-square bg-gray-200 rounded-full">
                      <span className="flex justify-center items-center w-full aspect-square bg-white rounded-full">
                        <CheckIcon />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center mt-8">Shipping</p>
                  </div>
                </div>
                <div>
                  <div className="relative w-[150px] sm:w-[200px] h-[5px] sm:h-2 rounded-r-full bg-blue-500">
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[40px] sm:w-[50px] p-1 sm:p-2 aspect-square bg-blue-500 rounded-full">
                      <span className="flex justify-center items-center w-full aspect-square bg-white rounded-full">
                        <CheckIcon />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center mt-8">Review & Payments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h2 className="text-xl">
                Payment Method
              </h2>
              <div className="flex items-center py-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  defaultValue=""
                  name="default-radio"
                  className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-radio-1"
                  className="text-xs sm:text-base ml-4 flex items-center gap-4 font-medium text-gray-900"
                >
                  <div className="w-[60px] sm:w-[100px] aspect-video bg-gray-100 rounded"></div>
                  Bank Transfer (T/T)
                </label>
              </div>
              <div className="flex items-center py-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  defaultValue=""
                  name="default-radio"
                  className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-radio-1"
                  className="text-xs sm:text-base ml-4 flex items-center gap-4 font-medium text-gray-900"
                >
                  <div className="w-[60px] sm:w-[100px] aspect-video bg-gray-100 rounded"></div>
                  Western Union
                </label>
              </div>
              <div>
                <div className="flex items-center py-4 border-t-4 border-gray-200">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-[15px] sm:w-[20px] aspect-square text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <label
                      htmlFor="default-radio-1"
                      className="text-xs sm:text-base ml-4 flex items-center gap-4 font-medium text-gray-900"
                    >
                      <div className="w-[60px] sm:w-[100px] aspect-video bg-gray-100 rounded"></div>
                      PayPal Express Checkout <a href="#" className="text-blue-500 hidden sm:inline">What is PayPal?</a>
                    </label>
                    <a href="#" className="text-xs pl-4 mt-2 text-blue-500 block sm:hidden">What is PayPal?</a>
                  </div>
                </div>
                <div className="pl-4 sm:pl-[36px]">
                  <label
                    htmlFor="message"
                    className="block my-2 text-sm font-medium text-gray-900"
                  >
                    Do you have any comments regarding the order? <KeyboardArrowUpIcon />
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your comment..."
                    defaultValue=""
                  />
                  <div className="lg:w-1/2 mx-auto sm:w-full">
                    <PayPalPayment />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[35%]">
            <div className="bg-gray-200 py-6 px-4 lg:mt-20 rounded">
              <h2 className="text-2xl">Order Summary</h2>
              <div className="border bg-gray-100 p-2 rounded mt-2">
                <div className="mb-3 w-full flex justify-between">
                  <span>Cart Subtotal</span>
                  <span>US$77,210.00</span>
                </div>
                <div className="mb-3 w-full flex justify-between">
                  <span>Insurance</span>
                  <span>US$0.00</span>
                </div>
                <div className="mb-3">
                  <div className="w-full flex justify-between">
                    <span>Shipping</span>
                    <span>US$954.00</span>
                  </div>
                  <p className="text-xs">Tabel Rate - FedEx Priority</p>
                </div>
                <div className="border-t py-4">
                  <div className="flex items-center justify-between ">
                    <h3 className="font-bold text-lg">Order Total</h3>
                    <span className="text-red-500 font-semibold text-base">US$78,164.00</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between border-b-[3px] border-gray-300">
                  <h4 className="font-medium text-lg">1 Item in Cart</h4>
                  <KeyboardArrowDownIcon fontSize="large" />
                </div>
                <div className="border-t py-4 flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-[70px] aspect-square rounded bg-gray-100">
                      <img src={products.src} alt="product" className="w-full h-full" />
                    </div>
                    <div>
                      <span className="block font-bold">C9300-48S-A</span>
                      <span className="block text-sm mb-3">Qty: 5</span>
                      <span className="block text-xs">View detail <KeyboardArrowDownIcon fontSize="small" /></span>
                    </div>
                  </div>
                  <div>
                    <span>US$77,210.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 py-6 px-4 mt-10 rounded">
              <div>
                <div className="flex items-center justify-between border-b-[3px] border-gray-300 pb-2">
                  <h4 className="font-medium text-lg">Ship To:</h4>
                  <SettingsOutlinedIcon fontSize="medium" />
                </div>
                <div className="border-t py-4">
                  <span className="block text-sm mb-2">Ethan Osuji</span>
                  <span className="block text-sm mb-2">130 E Voris Street</span>
                  <span className="block text-sm mb-2">Akron, Ohio 44311</span>
                  <span className="block text-sm mb-2">United States</span>
                  <span className="block mb-2 text-blue-500">732 523 1180</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between border-b-[3px] border-gray-300 pb-2">
                  <h4 className="font-medium text-lg">Shipping Method:</h4>
                  <SettingsOutlinedIcon fontSize="medium" />
                </div>
                <div className="border-t py-4 flex justify-between">
                  <div>
                    <span className="block text-sm mb-2">Table Rate - FedEx Priority</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage