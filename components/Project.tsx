"use client";

import React from "react";
import { ColourfulText } from "./ui/ColourfulText";
import EmblaCarousel from './EmblaCarousel'
import { NUMB_PROJ, OPTIONS } from "@/app/data";
import DotLottie from "./DotLottie";
 
export default function Project() {
  
  return (
  <div className="pt-10 px-4  overflow-hidden md:mx-auto"> 
 
      <h1 className="text-2xl  font-bold text-center text-white relative z-2 font-sans pb-10">
       <ColourfulText text="Nos Affiches Publicitaires" /> 
      </h1>
      
        <div className="flex flex-wrap gap-6 justify-center w-full   ">
     
        <EmblaCarousel slides={ Array.from(Array(NUMB_PROJ).keys())} options={OPTIONS} />
    </div>
  </div>

  );
}
