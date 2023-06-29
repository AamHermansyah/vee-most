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
import logo from "../../assets/logoheader.png";
import QuickQuote from "../QuickQuote";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import productsMenu from "./productsMenu";
import bgHeroLeft from "assets/bg-hero_left.png";
import bgHero from "assets/bg-hero.png";

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
    <header className="relative h-[30vh] md:h-[20vh] pt-3">
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

      <div className="relative pb-2 sm:pb-0">
        <div className="pt-4 px-4 sm:px-10">
          {!isNavFooterHidden && (
            <div className="text-xs sm:text-base flex justify-end w-full gap-4">
              {menu1.map((item) => (
                <div
                  key={item.id}
                  className={[
                    "font-[600]",
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
            <div className="w-full md:block flex items-center justify-between gap-4">
              <Image
                className="w-[150px] md:w-[225px] aspect-video cursor-pointer object-contain"
                src={logo}
                alt="logo"
                onClick={() => router.push("/")}
              />
              <div className="flex md:hidden gap-4">
                <ShoppingCartOutlined
                  sx={{
                    fontSize: 30,
                  }}
                />
                <PersonOutline
                  sx={{
                    fontSize: 30,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex md:justify-end w-full gap-4 mb-2 md:mb-4">
                <div className="flex gap-x-4 gap-y-2 flex-wrap md:flex-nowrap">
                  <SearchInput
                    placeholder={"I'm looking for..."}
                    height={40}
                    width={300}
                  />
                  <QuickQuote title={"Quick Quote"} />
                </div>
                <div className="hidden md:flex gap-4">
                  <ShoppingCartOutlined
                    sx={{
                      fontSize: 40,
                    }}
                  />
                  <PersonOutline
                    sx={{
                      fontSize: 40,
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end w-full gap-x-4 md:gap-x-8 pb-2">
                {menu2.map((item) =>
                  item.title === "Products" ? (
                    <Popover className="relative" key={item.id}>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={`
                              ${open ? "text-[#D7AA12]" : "text-black"}
                              group inline-flex items-center  hover:text-opacity-100 focus:outline-none  focus-visible:ring-opacity-75`}
                          >
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
                                            className={`${
                                              item.id === activeId
                                                ? "rotate-90"
                                                : "-rotate-90"
                                            } md:rotate-0`}
                                          >
                                            <ChevronRight
                                              sx={{
                                                color: `${
                                                  item.id === activeId
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
                    <Link href={item.link} key={item.id} className="whitespace-nowrap">
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
