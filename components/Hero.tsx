"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { heroImg } from "@/app/data";
 
export function Hero() {
  
  return (
    <ImagesSlider className="  h-[32.5rem]" images={heroImg}>
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          AS DU SHOP
        </motion.p>

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
        {"L'Agence de Communication Visuelle et de Marketing Digital"}
          </p>

        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Joindre →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
