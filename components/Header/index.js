"use client";

import { menu1, menu2 } from "@/app/menu";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import SearchInput from "../SearchInput";
import {
  ChevronLeft,
  ChevronRight,
  ExpandMore,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import logo from "../../assets/logoheader.png";
import QuickQuote from "../QuickQuote";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import productsMenu from "./productsMenu";

const Header = () => {
  const router = useRouter();
  const [productMenus, setProductMenus] = useState(
    JSON.parse(JSON.stringify(productsMenu))
  );

  const handleChildren = (e, item) => {
    e.preventDefault();
    const _temp = [...productMenus];
    _temp.forEach((data) => {
      if (data.id === item.id) {
        data.isChildrenActive = !data.isChildrenActive;
      } else {
        data.isChildrenActive = false;
      }
    });
    setProductMenus(_temp);
  };

  return (
    <>
      <div className="flex justify-end w-full gap-4 z-50">
        {menu1.map((item) => (
          <div
            key={item.id}
            className={[
              "font-[500]",
              item.id % 2 === 0 ? "border-x-2 border-black px-2" : "border-x-0",
            ].join(" ")}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Image
          className="w-[25%] h-[25%] cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => router.push("/")}
        />
        <div className="flex flex-col gap-4 justify-between items-start">
          <div className="flex justify-start w-full gap-4">
            <SearchInput
              placeholder={"I'm looking for..."}
              height={40}
              width={300}
            />
            <QuickQuote title={"Quick Quote"} />
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
          <div className="flex justify-end w-full gap-4">
            {menu2.map((item) =>
              item.title === "Products" ? (
                <Popover className="relative" key={item.id}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "text-[#D7AA12]" : "text-black"}
                group inline-flex items-center  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
                        <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                              <div className="col-span-1 flex flex-col gap-6">
                                {productMenus.map((item) => (
                                  <Fragment key={item.name}>
                                    <div
                                      className="ml-4 flex justify-between w-full cursor-pointer"
                                      onClick={(e) => handleChildren(e, item)}
                                    >
                                      <p
                                        className={[
                                          "text-sm font-medium",
                                          item.isChildrenActive
                                            ? "text-[#D7AA12]"
                                            : "text-black",
                                        ].join(" ")}
                                      >
                                        {item.name}
                                      </p>
                                      {item.isChildrenActive ? (
                                        <ChevronRight
                                          sx={{
                                            color: "#D7AA12",
                                          }}
                                        />
                                      ) : (
                                        <ChevronRight />
                                      )}
                                    </div>
                                  </Fragment>
                                ))}
                              </div>
                              <div className="col-span-1 flex flex-col gap-4 justify-start items-start">
                                {productMenus.map(
                                  (item) =>
                                    item.isChildrenActive &&
                                    (item.children || []).map((children) => (
                                      <p
                                        key={children.id}
                                        className="ml-4 text-sm font-medium text-black hover:text-[#D7AA12] cursor-pointer"
                                      >
                                        {children.name}
                                      </p>
                                    ))
                                )}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <Link href={item.link} key={item.id}>
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
