"use client";

import * as React from "react";
import Header from "@/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "@/components/Footer";
import Table from "@/components/pages/cart/Table";
import Checkout from "@/components/pages/cart/Checkout";


function CartPage() {
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
          <div className="py-10 px-4 lg:px-10">
            <div className="max-w-[1000px] ml-6">
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
            <div className="md:flex items-start">
              <div className="basis-[70%] w-full overflow-x-auto">
                <Table />
              </div>
              <div className="basis-[30%] md:pl-4 lg:pl-10 mt-10 md:mt-0">
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CartPage;



