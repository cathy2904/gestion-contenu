"use client"

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DashType } from "./DashBar";
import { Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { TiPuzzle } from "react-icons/ti";

const MenuOverlay = ({ dashs }: {dashs: DashType[]}) => {
    const pathname = usePathname()
  return (
    <ul className="flex flex-col p-4   w-full space-y-2 ">
      {dashs.map((dash, index) => (
        <li
        key={index}
        className={` hover:text-white hover:py-3 hover:px-6 hover:bg-[#2c2c2c] rounded-xl ${
          pathname === dash.link ? "text-[#48d80b] bg-[#2c2c2c] py-3 px-6 rounded-xl" : ""
        }`}
      >
        <div className="flex space-x-3">
          <span>{dash?.icon}</span>
          {dash.title && <Link href={dash.link}>{dash.title}</Link>}
          {dash.node && <div>{dash.node}</div>}
        </div>
      </li>
      ))}
      <div className="flex items-center space-x-2">
        <Button w={40} rounded="2xl" bg="#48d80b" color="#011106">
            <span><FaRocket /></span>
            <span className="font-bold">Upgrade</span>
        </Button>
        <Button w={40} rounded="2xl" bg="#172e12" color="#47d70b">
                <span  className="text-[#47d70b] rotate-45"><TiPuzzle size={32} className="w-8 h-8"/></span>
                <span className="font-bold">Plugin</span>
        </Button>
      </div>
    </ul>
  );
};

export default MenuOverlay;