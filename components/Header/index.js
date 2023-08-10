"use client";

import { menu1, menu2 } from "@/app/menu";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import SearchInput from "../SearchInput";
import {
  ChevronRight,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {PiShoppingCart} from 'react-icons/pi'
import {BsPerson} from 'react-icons/bs'
import logo from "../../assets/logoheader.png";
import QuickQuote from "../pages/home/QuickQuote";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import productsMenu from "./productsMenu";
import bgHeroLeft from "assets/bgHeroLeft.png";
import bgHero from "assets/bgHeroRight.png";
import TocIcon from '@mui/icons-material/Toc';

const Header = ({ isNavFooterHidden }) => {
  const router = useRouter();
  const [activeId, setActiveId] = useState(null);

  const handleChildren = (e, item) => {
    e.preventDefault();
    if (item.id === activeId) {
      setActiveId(null);
      return;
    }
    setActiveId(item.id);
  };

  return (
    <header className="relative">
      {router.pathname !== "/" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 h-[100vh] w-full">
            <div
              className={[
                "absolute w-full h-full bg-no-repeat top-0 left-0 opacity-30",
              ].join(" ")}
              style={{
                backgroundImage: `url(${bgHeroLeft.src})`,
              }}
            />
            <div
              className={[
                "absolute w-full h-full bg-no-repeat top-0 right-[-400px] opacity-30",
              ].join(" ")}
              style={{
                backgroundImage: `url(${bgHero.src})`,
              }}
            />
          </div>
        </div>
      )}

      <div className="relative pb-2 sm:pb-0">
        <div className="pt-2 px-4 lg:px-10">
          {!isNavFooterHidden && (
            <div className="text-xs sm:text-base flex justify-end w-full gap-4">
              {menu1.map((item) => (
                <div
                  key={item.id}
                  className={[
                    "font-medium",
                    item.id % 2 === 0
                      ? "border-x-2 border-black px-2"
                      : "border-x-0",
                  ].join(" ")}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
          <div className="block md:flex justify-between items-center">
            <div className="basis-[45%] lg:basis-[40%] w-full md:block flex items-center justify-between gap-4 max-h-[120px]">
              <Image
                className="relative lg:-top-8 w-[150px] md:w-[225px] lg:w-[300px] aspect-video cursor-pointer object-contain"
                src={logo}
                alt="logo"
                onClick={() => router.push("/")}
              />
              <div className="flex md:hidden gap-4">
                <PiShoppingCart
                  size={30}
                />
                <BsPerson
                  size={30}
                />
              </div>
            </div>
            <div className="basis-[55%] lg:basis-[60%]">
              <div className="flex md:justify-end w-full gap-4 mb-2">
                <div className="w-full flex justify-end gap-x-4 gap-y-2 items-center">
                  <SearchInput
                    placeholder={"I'm looking for..."}
                    height={30}
                    width={400}
                  />
                  <QuickQuote title={"Quick Quote"} />
                  <div className="hidden md:flex gap-4">
                    <PiShoppingCart
                      size={40}
                      className="hover:text-[#D7AA12] cursor-pointer"
                    />
                    <BsPerson
                      size={40}
                      className="hover:text-[#D7AA12] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center w-full gap-x-4 md:gap-x-8 pb-2 md:pb-0">
                {menu2.map((item) =>
                  item.title === "Products" ? (
                    <Popover className="relative" key={item.id}>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={`
                              ${open ? "text-[#D7AA12]" : "text-black"}
                              hover:text-[#aa8c28] text-sm sm:text-base font-medium group inline-flex items-end gap-2  hover:text-opacity-100 focus:outline-none  focus-visible:ring-opacity-75`}
                          >
                            <TocIcon
                              sx={{
                                fontSize: 35,
                                position: 'relative',
                                top: 5,
                              }}
                            />
                            <span>{item.title}</span>
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-0 md:left-[100%] lg:left-1/2 z-50 mt-3 w-screen max-w-[300px] md:max-w-2xl md:-translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative md:grid gap-8 bg-white px-4 py-7 md:p-7 grid-cols-2">
                                  <div className="col-span-1 flex flex-col gap-6">
                                    {productsMenu.map((item) => (
                                      <div key={item.name}>
                                        <div
                                          className="md:ml-4 flex justify-between w-full cursor-pointer"
                                          onClick={(e) =>
                                            handleChildren(e, item)
                                          }
                                        >
                                          <p
                                            className={[
                                              "text-sm font-medium",
                                              item.id === activeId
                                                ? "text-[#D7AA12]"
                                                : "text-black",
                                            ].join(" ")}
                                          >
                                            {item.name}
                                          </p>
                                          <div
                                            className={`${item.id === activeId
                                              ? "rotate-90"
                                              : "-rotate-90"
                                              } md:rotate-0`}
                                          >
                                            <ChevronRight
                                              sx={{
                                                color: `${item.id === activeId
                                                  ? "#D7AA12"
                                                  : "inherit"
                                                  }`,
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div className="md:hidden flex flex-col gap-4 justify-start items-start">
                                          {item.id === activeId &&
                                            item?.children?.map((item) => (
                                              <p
                                                key={item.id}
                                                className="ml-4 text-sm font-medium text-black hover:text-[#D7AA12] cursor-pointer"
                                              >
                                                {item.name}
                                              </p>
                                            ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="flex flex-col gap-4">
                                    {productsMenu
                                      .find((item) => item.id === activeId)
                                      ?.children?.map((item) => (
                                        <p
                                          key={item.id}
                                          className="ml-4 text-sm font-medium text-black hover:text-[#D7AA12] cursor-pointer"
                                        >
                                          {item.name}
                                        </p>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ) : (
                    <Link
                      href={item.link}
                      key={item.id}
                      className="whitespace-nowrap hover:text-[#D7AA12] text-sm sm:text-base font-medium"
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
