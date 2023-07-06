import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import dummyProducts from "../pages/home/dummyProducts";
import Image from "next/image";
import "./style.css";
import bg_slider from "../../assets/slider_background.png"

function Item({ item }) {
  return (
    <Paper className="h-full w-full flex items-center justify-center">
      <Image
        src={item.image}
        alt={item.name}
        className="w-[50%] object-cover object-center"
      />
    </Paper>
  );
}

const Sliders = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center"  
        style={{ backgroundImage: `url(${bg_slider.src})` }}
    >
      <Carousel
        className="h-full w-full flex items-center justify-center"
        NextIcon={<ChevronRight />}
        PrevIcon={<ChevronLeft />}
        indicators={false}
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
      >
        {dummyProducts.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Sliders;
