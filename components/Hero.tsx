"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { heroImg } from "@/app/data";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import { TypewriterEffect } from "./ui/TypewriterEffect"; 
 import ParticlesBg from "./ParticlesBg";
 
const wordsa = [
  {text: "L'Agence "},
  {text: "de"},
  {  text:"Communication"},
    {  text:"Visuelle "},
    {text: "&"}, {text: " de"},
    {text:"Marketing  " },
    {text:"  Digital" },
]
 
const wordsb = [
{text: "+242"},
{text: "06"}, 
{  text:"832"},
{  text:"85 "}, 
{text:"  53" },
{text:"/" },
{text: "+242"},
{text: "04"},
{text: "497"},
{  text:"00"},
{  text:"70 "}, 

{text:"/" },
{  text:"30"},
{  text:"Rue "}, 
{  text:"Djambala "},  
{  text:", "}, 
{  text:"Moungali "}, 
{  text:"Avenue "}, 
{  text:"Mayama "}, 
{  text:"Plateau "}, 
]

export function Hero() {
  
  return (
 
        <ImagesSlider className="   md:h-[32.5rem]    h-[25rem] z-50  " images={heroImg}>
       
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
          duration: 0.8,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
         <div className="" style={{
           zIndex: -1,
           height: "100%",
           width: "100%",
           position: "absolute"
         }}>
          <ParticlesBg id="particles"    />

         </div>

         <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 pb-4  ">
          Bienvenue chez
          </p>
          
          <motion.img 
 initial={{ y: -10 }}
 animate={{ y: 10 }}
 transition={{
   type: "smooth",
   repeatType: "mirror",
   duration: 2,
   repeat: Infinity,
 }}
            width={70}
             height={70}
               
              src={"/logo.png"}
              alt={"AS DU SHOP"}
              className={"     object-cover object-center w-20 z-50 "}
            />
          <TextGenerateEffect words="AS DU SHOP" className="font-bold  bg-clip-text text-white   py-4 text-4xl md:text-6xl "/>
       
          <p className="text-white text-center md:tracking-wider mb-4 text-sm   z-50">
        L'Agence de Communication Visuelle <br />  et de Marketing Digital 
          </p>
         
          <TypewriterEffect
          words={wordsb}
          className="text-center  max-w-60 md:max-w-72  font-sans font-light    text-sm    "/>
 
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Joindre →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>  
 
   
  );
}
