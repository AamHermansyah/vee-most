"use client";

import HeroSlider from "@/components/pages/home/HeroSlider";
import bgHero from "../assets/bg-hero.png";
import bgHeroLeft from "../assets/bg-hero_left.png";
import bgSection2 from "../assets/bg-section-2.png";
import bgSection3 from "../assets/bg-section-3.jpg";
import bgSection4 from "../assets/bg-section-4.png";
import React, { useEffect, useState } from "react";
import SectionTypeOne from "@/components/SectionTypeOne";
import SectionTypeTwo from "@/components/SectionTypeTwo";
import appearance from "./appearance";
import Dot from "@/components/pages/home/Dot";
import AllProductSection from "@/components/pages/home/Section";
import Header from "@/components/Header";

export default function Home() {
  const [imageToDisplay, setImageToDisplay] = useState([]);

  useEffect(() => {
    setImageToDisplay(JSON.parse(JSON.stringify(appearance)));
  }, []);

  return (
    <div className="overflow-x-hidden pb-10">
      <Header />

      <div className="relative">
        {imageToDisplay.map((item) => (
          <HeroSlider key={item.id} item={item} />
        ))}

        <div className="absolute left-4 sm:left-16 bottom-8 w-full flex items-center justify-start gap-4 z-30">
          {imageToDisplay.map((item) => (
            <Dot
              key={item.id}
              item={item}
              setImageToDisplay={setImageToDisplay}
              imageToDisplay={imageToDisplay}
            />
          ))}
        </div>
      </div>

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
    </div>
  );
}
