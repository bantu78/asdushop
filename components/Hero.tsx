"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { heroImg } from "@/app/data";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
 
export function Hero() {
  
  return (
    <ImagesSlider className=" md:h-[32.5rem]    h-[25rem]  " images={heroImg}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
         <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80  ">
          Bienvenue chez
          </p>

          <TextGenerateEffect words="AS DU SHOP" className="font-bold  bg-clip-text text-white   py-4"/>
     
        <p className="text-center max-w-56 md:max-w-96  font-sans font-light md:tracking-wider mb-4 text-sm md:text-lg lg:text-2x text-white ">
        {"L'Agence de Communication Visuelle & de Marketing Digital"}
          </p>

        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Joindre →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
