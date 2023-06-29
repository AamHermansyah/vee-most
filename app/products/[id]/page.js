"use client";

import * as React from "react";
import bgHeroLeft from "../../../assets/bg-hero_left.png";
import bgHero from "../../../assets/bg-hero.png";
import productPicture from "../../../assets/vee-store-product.png";
import Hero from "@/components/Hero";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import printer from "../../../assets/printer.png";
import mail from "../../../assets/mail.png";
import blueMail from "../../../assets/mail-blue.png"
import cart from "../../../assets/shopping-cart.png"

const Products = () => {
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
      <header className="h-[100vh] w-full relative">
        <div
          className={["absolute w-full h-full bg-no-repeat top-0 left-0 opacity-30"].join(
            " "
          )}
          style={{
            backgroundImage: `url(${bgHeroLeft.src})`,
          }}
        />
        <div
          className={["absolute w-full h-full bg-no-repeat top-0 right-[-400px] opacity-30"].join(
            " "
          )}
          style={{
            backgroundImage: `url(${bgHero.src})`,
          }}
        />

        <div className="relative">
          <Hero />
        </div>

        <main className="h-screen relative z-10 mt-6">
          <div className="absolute inset-0 bg-white">
            <div className="h-[35px] absolute inset-y-0 inset-x-[10%] mt-2">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className="w-auto h-auto mt-[100px]">
                    <img src={productPicture.src} alt="Product" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className="w-full h-auto mt-4 ">
                    <Stack spacing={2} direction="row" className="justify-end mb-2">
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
                    </Stack>
                    <div className="flex items-center justify-end">
                      <img src={printer.src} alt="Print" className="mr-2 w-[25px] h-[25px]" />
                      <Typography variant="body2" className="mr-4">
                        PRINT
                      </Typography>
                      <img src={mail.src} alt="Mail" className="mr-2 w-[25px] h-[25px]" />
                      <Typography variant="body2">MAIL</Typography>
                    </div>
                    <div className="font-bold text-sm mt-4">
                      Cisco Catalyst 9300 24-port PoE+, Network Advantage - 24 Port -
                      Manageable - 2 Layer Supported - 715 W Power Consumption - Twisted
                      Pair - Rack Mountable - Lifetime Limited Warranty
                    </div>
                    <div className="flex justify-between mt-10">
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <Typography variant="body1"><strong>VPN: </strong>C9300-24-P-A</Typography>
                        <Typography variant="body1"><strong>SKU: </strong>9Y6451</Typography>
                        <Typography variant="body1"><strong>UPC: </strong>08897280051682</Typography>
                        <Typography variant="body1"><strong>By: </strong>Cisco</Typography>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="mr-4 flex-col flex-wrap" >
                          <div className="text-2xl font-bold mt-4">$3,319.28</div>
                          <Typography variant="body2" color="text.secondary">
                            MSRP $7,071.41 EXCL TAX
                          </Typography>
                        </div>
                        <div className="flex gap-2 mt-8">
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
                          <button
                            className="flex items-center justify-center p-2 w-[50px] h-[35px]"
                            style={{
                              backgroundImage: `url(${cart.src})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-red-600 mt-4">End User Information Required</div>
                      <Button
                        variant="contained"
                        className="text-red-700 mt-4"
                        style={{ backgroundColor: "#CCCCCC", borderRadius: "50px" }}
                      >
                        Out of Stock
                      </Button>
                      <div className="flex mt-4 ">
                        <img src={blueMail.src} alt="Mail" className="mr-2 w-[25px] h-[25px]" />
                        <span className="text-blue-500">Notify Me When Available</span>
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
      </header>
    </>
  );
};

export default Products;


