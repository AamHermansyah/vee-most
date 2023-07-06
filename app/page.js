"use client";

import HeroSlider from "@/components/pages/home/HeroSlider";
import bgHero from "../assets/bgHeroRight.png";
import bgHeroLeft from "../assets/bgHeroLeft.png";
import bgSection2 from "../assets/bgSection2.png";
import bgSection4 from "../assets/bgSection4.png";
import React, { useEffect, useState } from "react";
import SectionTypeOne from "@/components/SectionTypeOne";
import SectionTypeTwo from "@/components/SectionTypeTwo";
import appearance from "./appearance";
import Dot from "@/components/pages/home/Dot";
import AllProductSection from "@/components/pages/home/Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Sliders from "@/components/Slider";
import bgSection3 from "../assets/bgSection3.png"

export default function Home() {
  const router = useRouter()
  const [imageToDisplay, setImageToDisplay] = useState([]);

  useEffect(() => {
    setImageToDisplay(JSON.parse(JSON.stringify(appearance)));
  }, []);

  return (
    <>
      <div className="overflow-x-hidden pb-10 relative">
        {router.pathname !== "/" && (
          <div className="relative h-screen">
            {imageToDisplay.map((item) => (
              <React.Fragment key={item.id}>
                {item.isLeft && item.isActive && (
                  <div
                    key={item.id}
                    className={[
                      "absolute w-full h-full bg-no-repeat top-0 left-0 opacity-70 bg-center bg-cover z-0",
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
                      "absolute w-full h-full bg-no-repeat top-0 right-0 opacity-70 bg-center bg-cover z-0",
                      item.isActive ? "block" : "hidden",
                    ].join(" ")}
                    style={{
                      backgroundImage: `url(${bgHero.src})`,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
            <Header />

            <div className="relative h-[80vh]">
              {imageToDisplay.map((item) => (
                <HeroSlider key={item.id} item={item} />
              ))}

              <div className="absolute left-4 sm:left-16 bottom-24 md:bottom-14 w-full flex items-center justify-start gap-4 z-30">
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
          </div>
        )}

        {/* Section 2 */}
        <AllProductSection />
        <SectionTypeOne
          title="On-premise and Cloud Products & Services"
          desc={
            "Tailored solutions for your unique needs - Let us help you find the IT products & services that work best for you"
          }
          isVisibleLogo={true}
          bg={bgSection2}
        />
        <Sliders />
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
        <Footer/>
      </div>
    </>
  );
}
