"use client"; 

import { HStack } from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";
import { RiMenuAddLine, RiSoundModuleLine, RiMenuSearchLine } from "react-icons/ri";
import { AiOutlineDashboard, AiOutlineSound } from "react-icons/ai";
import { SlBookOpen } from "react-icons/sl";
import { DiAptana } from "react-icons/di";
import { MenuNav } from "./MenuNav";
import { contents, markets } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type DashType = {
  title?: string,
  node?: React.ReactNode,
  icon: React.ReactNode,
  link: string
}
export const dashs = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard className="w-8 h-8" />,
    link: "/",
  },
  // {
  //   title: "Generer",
  //   icon: <RiSoundModuleLine className="w-6 h-8"/>,
  //   link: "/content",
  // },
  // {
  //   title: "Generate",
  //   icon: <RiSoundModuleLine className="w-6 h-8"/>,
  //   link: "/contenu",
  // },
  
  // {
  //   title: "Article",
  //   icon: <RiSoundModuleLine className="w-6 h-8"/>,
  //   link: "/articles",
  // },
  // {
  //   title: "Post",
  //   icon: <RiSoundModuleLine className="w-6 h-8"/>,
  //   link: "/post",
  // },
  {
    // title: ,
    node: <MenuNav menus={contents} />,
    icon: <RiMenuAddLine className="w-6 h-8"/>,
    link: "/content",
  },

  {
    node: <MenuNav menus={markets} />,
    icon: <AiOutlineSound className="w-6 h-8"/>,
    link: "/marketing",
  },
  {
    title: "Prospects",
    icon: <RiMenuSearchLine className="w-4 h-8"/>,
    link: "/prospects",
  },
  {
    title: "Analysis",
    icon: <FaChartPie className="w-4 h-8"/>,
    link: "/upload",
  },
  // {
  //   title: "Referal",
  //   icon: <SlBookOpen className="w-4 h-8"/>,
  //   link: "/referal",
  // },
  {
    title: "Settings",
    icon: <DiAptana className="w-4 h-8"/>,
    link: "/users",
  },
];

export default function DashBar() {
  const pathname = usePathname(); 

  return (
    <HStack w="1/6" display={{base: "none", md: "flex"}} px={6} mx="2">
      <ul className="space-y-8 text-xl">
        {dashs.map((dash, key) => (
          <li
            key={key}
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
      </ul>
    </HStack>
  );
}
