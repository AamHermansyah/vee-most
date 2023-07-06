import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Paper, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import dummyProducts from "../pages/home/dummyProducts";
import Image from "next/image";
import "./style.css";
import bg_slider from "../../assets/slider_background.png";

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
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_slider.src})` }}
    >
      <Carousel
        className="relative h-full w-full flex items-center justify-center"
        NextIcon={<ChevronRight />}
        PrevIcon={<ChevronLeft />}
        indicators={true}
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          sx: {
            backgroundColor: "#D7AA12 !important",
          },
        }}
        indicatorContainerProps={{
          sx: {
            position: 'absolute',
            bottom: 50,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '10px 10px'
          }
        }}
        indicatorIconButtonProps={{
          sx: {
            backgroundColor: '#e2e8f0 !important',
            borderRadius: 0,
            width: isSmScreen ? 30 : 60,
            height: 10,
            '&:hover': {
              backgroundColor: '#cbd5e1 !important',
            },
            '& svg': {
              display: 'none'
            }
          },
        }}
        activeIndicatorIconButtonProps={{
          sx: {
            backgroundColor: '#D7AA12 !important',
            borderRadius: 0,
            width: isSmScreen ? 30 : 60,
            height: 10,
            '&:hover': {
              backgroundColor: '#cbd5e1 !important',
            },
            '& svg': {
              display: 'none'
            }
          }
        }}
      >
        {dummyProducts.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Sliders;
