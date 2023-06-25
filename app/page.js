"use client";

import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import bgHero from "../assets/bg-hero.png";
import bgHeroLeft from "../assets/bg-hero_left.png";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/hooks/getWindowsDimension";

const appearance = [
  {
    id: 1,
    isActive: true,
    imageUrl:
      "https://media-private.canva.com/kuqcQ/MAFhGxkuqcQ/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230624T031055Z&X-Amz-Expires=46809&X-Amz-Signature=6ee7af2421b56e80ca691da8459b2e0b34d157e9c48775ff267f2be3e845c6ed&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2024%20Jun%202023%2016%3A11%3A04%20GMT",
    title: "Secure your business",
    desc: "Buy new and refurbished Next Generation Firewalls to Secure your business operations, network and users.",
  },
  {
    id: 2,
    isActive: false,
    imageUrl:
      "https://media-private.canva.com/w6a8I/MAFhGww6a8I/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230624T064212Z&X-Amz-Expires=37012&X-Amz-Signature=0b25fafc13b8014efcb998b31732808266cc929c7912b049d43daf2f0f703957&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2024%20Jun%202023%2016%3A59%3A04%20GMT",
    title: "Connect with confidence ",
    desc: "Empower your network with reliable switches.",
  },
];

export default function Home() {
  const [imageToDisplay, setImageToDisplay] = useState([]);
  // const [clientWindowHeight, setClientWindowHeight] = useState("");

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };

  // console.log(clientWindowHeight);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  useEffect(() => {
    setImageToDisplay(JSON.parse(JSON.stringify(appearance)));
  }, []);

  return (
    <>
      <header className={`h-[100vh] w-full relative`}>
        {imageToDisplay.map((item) => (
          <>
            {item.id % 2 === 0 && item.isActive && (
              <div
                key={item.id}
                className={[
                  "absolute w-full h-full bg-no-repeat top-0 left-0 opacity-30",
                  item.isActive ? "block" : "hidden",
                ].join(" ")}
                style={{
                  backgroundImage: `url(${bgHeroLeft.src})`,
                }}
              />
            )}
            {item.id % 2 !== 0 && item.isActive && (
              <div
                key={item.id}
                className={[
                  "absolute w-full h-full bg-no-repeat top-0 right-[-400px] opacity-30",
                  item.isActive ? "block" : "hidden",
                ].join(" ")}
                style={{
                  backgroundImage: `url(${bgHero.src})`,
                }}
              />
            )}
          </>
        ))}

        <Hero />
        <div className="h-[80vh] w-[90%] mx-auto">
          <HeroSlider
            imageToDisplay={imageToDisplay}
            setImageToDisplay={setImageToDisplay}
          />
        </div>
      </header>
      <main className="h-screen"></main>
    </>
  );
}
