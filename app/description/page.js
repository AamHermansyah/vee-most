"use client";

import * as React from "react";
import { useState } from "react";
import bgHeroLeft from "../../assets/bg-hero_left.png";
import bgHero from "../../assets/bg-hero.png";
import Hero from "@/components/Hero";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Description() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="text-justify gap-2">
            <p className="mb-2">
              Cisco Catalyst 9300 24-port PoE+, Network Advantage - 24 Port -
              Manageable - 2 Layer Supported - 715 W Power Consumption - Twisted
              Pair - Rack Mountable - Lifetime Limited Warranty
            </p>
            <p className="font-bold mb-3">
              Build for Security, IoT, Mobility, and Cloud
            </p>
            <p className="mb-4">
              The Cisco@ Catalyst@ 9300 Series Switches are Cisco's lead stackable enterprise switching platform built for security, IOT, mobility, and cloud. They are the next generation of the industry's most
              widely deployed switching platform. The Catalyst 9300 Series switches form the foundational building block for Software-Defined Access (SD-Access), Cisco's lead enterprise architecture. At 480
              Gbps, they are the industry's highest-density stacking bandwidth solution with the most flexible uplink architecture. The Catalyst 9300 Series is the first optimized platform for high-density 802.11 ac
              Wave2. It sets new maximums for network scale. These switches are also ready for the future, with an x86 CPU architecture and more memory, enabling them to host containers and run third-party
              applications and scripts natively within the switch.
            </p>
            <p className="mb-2">
              The Catalyst 9300 Series is designed for Cisco StackWise@ virtual technology, providing flexible deployment with support for nonstop forwarding with stateful switchover (NSF/SSO)i for the most
              resilient architecture in a stackable sub-50-ms solution. The highly resilient and efficient power architecture features Cisco StackPower@, which delivers high-density Cisco Universal Power Over
            </p>
          </div>
        );
      case 2:
        return (
          <div className="text-justify gap-2">
            <p className="mb-2">
              blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
            </p>
            <p className="font-bold mb-3">
              elementum integer enim neque volutpat ac tincidunt
            </p>
            <p className="mb-4">
              Morbi eu congue ipsum. Sed dignissim, turpis a semper lobortis, ante neque pulvinar enim, ut varius purus leo eu lectus. Mauris quis varius felis. Morbi vitae faucibus nisi. Duis mattis lacus in mauris aliquam, vitae auctor tellus aliquet. Nulla nec tellus id leo volutpat cursus. Nunc non lectus massa. Vivamus ultrices libero elit, ut tempor ex consequat ac. Suspendisse id tellus vel enim fermentum eleifend. Etiam id ultricies erat. Mauris fermentum dignissim justo, vitae pulvinar orci vestibulum nec. Nunc ac elit eu orci tristique fermentum non id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur id varius neque. Proin eu lacus eu sem convallis pulvinar. Proin nec elementum felis, non semper nisl.
            </p>
            <p className="mb-2">
              Phasellus rutrum justo eu gravida efficitur. Donec sed varius justo. Sed vulputate facilisis mi, et tincidunt enim aliquam nec. Mauris mattis mauris sit amet efficitur malesuada. Maecenas at magna vel quam euismod vulputate. Donec rutrum nibh non dolor malesuada bibendum. Etiam ut est sagittis, lacinia nibh at, tincidunt tellus.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-justify gap-2">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis tempus ligula, eget efficitur lectus ultrices sed. Quisque eu ligula ipsum. Mauris semper cursus odio, eu tempor turpis dignissim non. Vestibulum rutrum fermentum arcu at vestibulum. Fusce at odio mi. Integer ultricies velit a condimentum efficitur.
            </p>
            <p className="font-bold mb-3">
              Sed suscipit maximus velit sed ultrices. Phasellus quis justo at erat malesuada volutpat. In lobortis cursus ligula, nec auctor mauris iaculis sed.
            </p>
            <p className="mb-4">
              Etiam tristique ultrices nulla, nec interdum nunc consequat vitae. Duis eget est non leo lobortis vestibulum. Quisque convallis, odio vitae elementum laoreet, lacus tellus dignissim tellus, eu consequat orci est sed tortor. Donec fringilla, nisl ut accumsan rhoncus, tortor metus congue enim, in facilisis lectus lectus vitae mauris. Curabitur gravida enim vitae nisl lobortis, nec pulvinar velit convallis. Praesent vestibulum risus felis, at vestibulum elit feugiat vel. Aliquam eleifend hendrerit purus nec commodo. Mauris a sapien in mauris aliquet sollicitudin a vel nibh.
            </p>
            <p className="mb-2">
              Suspendisse consequat pharetra eleifend. Curabitur eget nibh lectus. Duis aliquet risus id justo tristique, in fermentum elit fermentum. Integer ullamcorper tellus urna, a pharetra mi pulvinar in. Aenean vitae neque hendrerit, ultrices orci ut, pellentesque sem. Sed consequat finibus ex, vitae pharetra leo volutpat eu.
            </p>
          </div>
        );
      case 4:
        return (
          <>
            <div className="flex flex-col gap-6">
              <div className="flex w-full h-[50px] bg-gray-100 items-center">
                <h1 className="font-bold text-blue-600 underline text-xl">Warranty Information</h1>
              </div>
              <div className="flex w-full h-[50px] bg-gray-100 items-center">
                <h1 className="font-bold text-black text-md">Additional Information</h1>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-2">Height : 8.75 Inches</p>
              <p className="mb-2">Width : 21.25 Inches</p> 
              <p className="mb-2">Length : 22 Inches</p>
              <p className="mb-2">Shipping Weight</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderTabLine = () => {
    return (
      <div className="flex">
        <div className={`h-1 w-1/4 ${activeTab === 1 ? "bg-blue-500" : "bg-gray-300"}`} />
        <div className={`h-1 w-1/4 ${activeTab === 2 ? "bg-blue-500" : "bg-gray-300"}`} />
        <div className={`h-1 w-1/4 ${activeTab === 3 ? "bg-blue-500" : "bg-gray-300"}`} />
        <div className={`h-1 w-1/4 ${activeTab === 4 ? "bg-blue-500" : "bg-gray-300"}`} />
      </div>
    );
  };

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
    <header className="h-[100vh] w-full relative">
      <div
        className={["absolute w-full h-full bg-no-repeat top-0 left-0 opacity-30"].join(" ")}
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

            <div className="flex mt-4 space-x-4 justify-between">
              <button
                className={`tab-button ${activeTab === 1 ? "text-blue-500" : "text-black"} font-bold mx-[10px]`}
                onClick={() => handleTabClick(1)}
              >
                Description
              </button>
              <button
                className={`tab-button ${activeTab === 2 ? "text-blue-500" : "text-black"} font-bold mx-[10px]`}
                onClick={() => handleTabClick(2)}
              >
                Technical Specification
              </button>
              <button
                className={`tab-button ${activeTab === 3 ? "text-blue-500" : "text-black"} font-bold mx-[10px]`}
                onClick={() => handleTabClick(3)}
              >
                Manufacturer Information
              </button>
              <button
                className={`tab-button ${activeTab === 4 ? "text-blue-500" : "text-black"} font-bold mx-[10px]`}
                onClick={() => handleTabClick(4)}
              >
                Warranty & Additional Information
              </button>
            </div>


            {renderTabLine()}
            <div className="p-2 mt-4">{renderTabContent()}</div>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Description;
