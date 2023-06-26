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
    <>
      <div className="flex justify-end w-full gap-4">
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
            {menu2.map((item) => (
              <Link href={item.link} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
