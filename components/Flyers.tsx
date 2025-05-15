"use client";

import React from "react";
import { ColourfulText } from "./ui/ColourfulText";
import EmblaCarousel from './EmblaCarousel'
import {   NUMB_FLY, OPTIONS } from "@/app/data";
import FlyersCarousel from "./FlyersCarousel";
 
export default function Flyers() {
  
  return (
  <div className="pt-10 px-4  overflow-hidden md:mx-auto"> 
 
      <h1 className="text-2xl  font-bold text-center text-white relative z-2 font-sans pb-10">
       <ColourfulText text="Nos Flyers Anniversaires" /> 
      </h1>
      
        <div className="flex flex-wrap gap-6 justify-center w-full   ">
     
        <FlyersCarousel slides={ Array.from(Array(NUMB_FLY).keys())} options={OPTIONS} />
    </div>
  </div>

  );
}
