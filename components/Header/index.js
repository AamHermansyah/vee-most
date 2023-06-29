"use client";

import { menu1, menu2 } from "@/app/menu";
import Image from "next/image";
import React from "react";
import SearchInput from "../SearchInput";
import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import logo from "../../assets/VeeMost_Smart_Store.png";
import QuickQuote from "../QuickQuote";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="relative py-4 px-4 md:pr-4">
      <div className="text-xs sm:text-base flex justify-end w-full gap-4">
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
      <div className="block md:flex justify-between items-center">
        <div className="w-full md:block flex items-center justify-between gap-4">
          <Image
            className="w-[150px] md:w-[225px] cursor-pointer"
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
        <div className="flex flex-col gap-4 justify-between items-start mt-2">
          <div className="flex justify-start w-full gap-4">
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
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end w-full gap-x-4">
            {menu2.map((item) => (
              <Link href={item.link} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
