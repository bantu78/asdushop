"use client";

import React from "react";
import { ColourfulText } from "./ui/ColourfulText";
 import {  NUMB_PROJ_PRINT, OPTIONS } from "@/app/data";
import PrintingCarousel from "./PrintingCarousel";

export default function Printing() {
  
  return (
  <div className="pt-10 px-4  overflow-hidden md:mx-auto"> 
  
      <h1 className="text-2xl  font-bold text-center text-white relative z-2 font-sans pb-10">
       <ColourfulText text="Impressions & Montages" /> 
      </h1>
      
        <div className="flex flex-wrap gap-6 justify-center w-full   ">
     
        <PrintingCarousel slides={ Array.from(Array(NUMB_PROJ_PRINT).keys())} options={OPTIONS} />
    </div>
  </div>

  );
}
