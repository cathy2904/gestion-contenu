"use client"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from "./MenuOverlay";
import { dashs } from "./DashBar";

export default function MobileBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (<div className="w-full z-50 sticky top-1 left-5 ml-4">
    <div className="mobile-menu block md:hidden w-full bg-[#121212]">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <IoMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaXmark className="h-5 w-5" />
            </button>
          )}
          {navbarOpen && <MenuOverlay dashs={dashs} />}
          
    </div>

    </div>)
}