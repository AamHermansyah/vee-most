"use client";

import * as React from "react";
import productPicture from "../../../assets/vee-store-product.png";
import Header from "@/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import printer from "../../../assets/printer.png";
import mail from "../../../assets/mail.png";
import blueMail from "../../../assets/mail-blue.png"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Products = () => {
  const [number, setNumber] = React.useState(1);

  const updateQuantity = (id, value) => {
    setNumber((prevState) => prevState + value);
  }

  const breadcrumbs = [
    <Typography key="1" className="font-bold text-yellow-600">
      Home
    </Typography>,
    <Typography key="2" color="text.primary" className="font-bold">
      Products
    </Typography>,
    <Typography key="3" color="text.primary" className="font-bold">
      Network Device
    </Typography>,
    <Typography key="4" color="text.primary" className="font-bold">
      Switches
    </Typography>,
    <Typography key="5" color="text.primary" className="font-bold">
      Ethernet Switch
    </Typography>,
    <Typography key="6" color="text.primary" className="font-bold">
      Cisco Catalyst 9300
    </Typography>,
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 mt-6">
        <div className="bg-white px-4 sm:px-10">
          <div className="h-[35px] mt-2">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <Stack spacing={2} direction="row" className="justify-end mb-2">
              <Button
                className="rounded-full"
                variant="outlined"
                sx={{
                  fontSize: "0.75rem",
                  padding: "4px 8px",
                  borderColor: "black",
                  color: "black",
                }}
              >
                Quick Order
              </Button>
            </Stack>
            <div className="flex items-center justify-end mt-4">
              <img src={printer.src} alt="Print" className="mr-2 w-[20px] h-[20px]" />
              <Typography variant="body2" className="mr-4">
                PRINT
              </Typography>
              <img src={mail.src} alt="Mail" className="mr-2 w-[20px] h-[20px]" />
              <Typography variant="body2">MAIL</Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <div className="w-auto h-auto md:mt-[100px] aspect-video sm:aspect-auto">
                  <img src={productPicture.src} alt="Product" />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className="w-full h-auto mt-4 ">
                  <div className="font-bold mt-4">
                    Cisco Catalyst 9300 24-port PoE+, Network Advantage - 24 Port -
                    Manageable - 2 Layer Supported - 715 W Power Consumption - Twisted
                    Pair - Rack Mountable - Lifetime Limited Warranty
                  </div>
                  <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:mt-10">
                    <div>
                      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1">
                        <Typography variant="body1"><strong>VPN: </strong>C9300-24-P-A</Typography>
                        <Typography variant="body1"><strong>SKU: </strong>9Y6451</Typography>
                        <Typography variant="body1"><strong>UPC: </strong>08897280051682</Typography>
                        <Typography variant="body1"><strong>By: </strong>Cisco</Typography>
                      </div>
                      <span className="block font-bold text-yellow-600 mt-4">End User Information Required</span>
                      <Button
                        variant="contained"
                        className="text-red-700 mt-4 bg-red-100 rounded-[50px] hover:bg-red-200"
                      >
                        Out of Stock
                      </Button>
                      <div className="flex mt-4 ">
                        <img src={blueMail.src} alt="Mail" className="mr-2 w-[25px] h-[25px]" />
                        <span className="text-blue-500">Notify Me When Available</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="mr-4 flex-col flex-wrap" >
                        <div className="text-2xl font-bold mt-4">$3,319.28</div>
                        <Typography variant="body2" color="text.secondary">
                          MSRP $7,071.41 EXCL TAX
                        </Typography>
                      </div>
                      <div className="flex gap-2 mt-8">
                        <div className="flex-1 flex justify-between border-2 rounded-md">
                          <button
                            onClick={() => updateQuantity(1, -1)}
                            className="px-2 py-1 text-gray-700"
                          >
                            -
                          </button>
                          <p className="px-2 py-1">
                            {number}
                          </p>
                          <button
                            onClick={() => updateQuantity(1, 1)}
                            className="px-2 py-1 text-gray-700"
                          >
                            +
                          </button>
                        </div>
                        <button className="flex-1 px-2 py-1 rounded-md bg-blue-500 text-white">
                          <AddShoppingCartIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="mt-6">
              <div className="h-1 bg-orange-500" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;


