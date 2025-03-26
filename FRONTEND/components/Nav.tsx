import Image from "next/image";
import { Button } from "./ui/button";
import { MenuNav } from "./MenuNav";
import { FaRocket } from 'react-icons/fa';  
import { TiPuzzle } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

import { FaBell } from 'react-icons/fa'; 
import { menunav } from "@/data/data";


export default function Nav() {
  return (
    <nav className="w-full flex p-4">
      <div className="flex justify-start items-center w-1/3 space-x-4">
        <span><Image src='/logo.webp' width={32} height={32} alt="logo" /></span>
        <h1 className="font-extrabold text-sm md:text-xl">AI Boostez</h1>
      </div>
      <div className="flex justify-end items-center space-x-6 w-2/3 px-4">
        <Button display={{base: "none", md: "flex"}} w={40} rounded="2xl" bg="#48d80b" color="#011106">
          <span><FaRocket /></span>
          <span className="font-bold">Upgrade</span>
        </Button>
        <Button w={40} display={{base: "none", md: "flex"}} rounded="2xl" bg="#172e12" color="#47d70b">
          <span  className="text-[#47d70b] rotate-45"><TiPuzzle size={32} className="w-8 h-8"/></span>
          <span className="font-bold">Plugin</span>
        </Button>
        
        <div className="flex space-x-3">
          <span className="bg-[#f0f0f0] text-[#bdbdbd] rounded-full w-8 h-8 flex justify-center items-center"><FaBell /></span>
          <span className="bg-[#2c2c2c] text-[#a9a9a9] rounded-full w-8 h-8 flex justify-center items-center"><FaRegUser /></span>
          <MenuNav menus={menunav} />
        </div>
      </div>
      
    </nav>
  )
}