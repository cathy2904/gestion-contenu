"use client"

import { useState } from "react"
import { Box } from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa6";

export default function Copy() {
    const [copied, setCopied] = useState(false);
    const link = "https://aiboostez.com/2hdgfjk7sbkwo";
    const handleCopy = () => {
        navigator.clipboard.writeText(link).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); 
        });
      };
  return (     
    <Box display="flex" justifyContent="space-evenly" p="2" w={{base: "full", md: "1/2"}} borderWidth="2px" rounded="2xl" borderColor="#1d1d1d">
    <span className="w-1/2 md:w-full inline">https://aiboostez.com/2hdgfjk7sbkwo</span>
    {/* <span className="block md:hidden">https://aiboostez.com/...</span> */}
    <span  onClick={handleCopy} style={{ cursor: "pointer" }} className="hover:text-[#44d00c]">
        {copied ? 'copied' : <FaRegCopy /> }
    </span>
    </Box>

  )
}