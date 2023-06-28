"use client";

import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import bgHero from "../assets/bg-hero.png";
import bgHeroLeft from "../assets/bg-hero_left.png";
import bgSection2 from "../assets/bg-section-2.png";
import bgSection3 from "../assets/bg-section-3.jpg";
import bgSection4 from "../assets/bg-section-4.png";
import React, { useEffect, useState } from "react";
import SectionTypeOne from "@/components/SectionTypeOne";
import SectionTypeTwo from "@/components/SectionTypeTwo";
import appearance from "./appearance";
import Dot from "@/components/Dot";
import AllProductSection from "@/components/AllProductsSection";

export default function Home() {
  const [imageToDisplay, setImageToDisplay] = useState([]);

  useEffect(() => {
    setImageToDisplay(JSON.parse(JSON.stringify(appearance)));
  }, []);

  return (
    <>
      <header className={`min-h-screen lg:h-screen w-full relative`}>
        {imageToDisplay.map((item) => (
          <React.Fragment key={item.id}>
            {item.isLeft && item.isActive && (
              <div
                key={item.id}
                className={[
                  "absolute w-full h-full bg-no-repeat top-0 left-0 opacity-30 bg-center bg-cover z-0",
                  item.isActive ? "block" : "hidden",
                ].join(" ")}
                style={{
                  backgroundImage: `url(${bgHeroLeft.src})`,
                }}
              />
            )}
            {!item.isLeft && item.isActive && (
              <div
                key={item.id}
                className={[
                  "absolute w-full h-full bg-no-repeat top-0 right-0 opacity-30 bg-center bg-cover z-0",
                  item.isActive ? "block" : "hidden",
                ].join(" ")}
                style={{
                  backgroundImage: `url(${bgHero.src})`,
                }}
              />
            )}
          </React.Fragment>
        ))}

        <Hero />
        {imageToDisplay.map((item) => (
          <HeroSlider key={item.id} item={item} />
        ))}
        <div className="absolute bottom-10 left-10 lg:left-40 w-full flex items-center justify-start gap-4 z-50">
          {imageToDisplay.map((item) => (
            <Dot
              key={item.id}
              item={item}
              setImageToDisplay={setImageToDisplay}
              imageToDisplay={imageToDisplay}
            />
          ))}
        </div>
      </header>
      {/* Section 2 */}
      <SectionTypeOne
        title="On-premise and Cloud Products & Services"
        desc={
          "Tailored solutions for your unique needs - Let us help you find the IT products & services that work best for you"
        }
        isVisibleLogo={true}
        bg={bgSection2}
      />
      <AllProductSection />
      <SectionTypeOne
        title="Our Tech Team
        at your disposal"
        desc={
          "Tailored solutions for your unique needs - Let us help you find the IT products & services  that work best for you"
        }
        bg={bgSection3}
      />
      <SectionTypeOne
        title="Our tech team at your disposal"
        desc={
          "Tailored solutions for your unique needs - Let us help you find the IT products & services  that work best for you"
        }
        bg={bgSection4}
      />
      <SectionTypeTwo
        isVisibleLogo={true}
        title={"Connect with us today"}
        desc={
          "Tailored solutions for your unique needs - Let us help you find the IT products & services  that work best for you"
        }
      />
    </>
  );
}
