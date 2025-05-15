"use client";
import { motion } from "motion/react";
import React   from "react";
 import { TextGenerateEffect } from "./ui/textGenerateEffect";
import { TypewriterEffect } from "./ui/TypewriterEffect";
 import SocialLink from "./SocialLink";
import dynamic from "next/dynamic";
import {   SpinnerRoundOutlined } from 'spinners-react';
 
const wordsb = [
  { text: "+242" },
  { text: "06" },
  { text: "832" },
  { text: "85 " },
  { text: "  53" },
  { text: "/" },
  { text: "+242" },
  { text: "04" },
  { text: "497" },
  { text: "00" },
  { text: "70 " },

  { text: "/" },
  { text: "30" },
  { text: "Rue " },
  { text: "Djambala " },
  { text: ", " },
  { text: "Moungali " },
  { text: "Avenue " },
  { text: "Mayama " },
  { text: "Plateau " },
 
  
]


 
const DynamicParticlesBg = dynamic(() => import('./ParticlesBg'), {
  ssr: false,  
    loading: () =>   
    <div className="flex justify-center items-center w-full h-full"> 
  <SpinnerRoundOutlined color="#f08125"  />
</div>
});


 
export function Hero() {
  
  return (

  <div  className="  md:h-[32.5rem]    h-[25rem]    w-full    bg-[url('/hero-1.jpg')] overflow-hidden relative flex items-center justify-center   "  >

 <div className="absolute inset-0 bg-black/60  "> </div>
           
      <div className="z-50 flex flex-col justify-center items-center"
      >
         <div className="absolute  inset-0 z-0   w-full h-full" >
      <DynamicParticlesBg id="particles"  /> 
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
          className={"     object-cover object-center w-20   "}
        />
        <TextGenerateEffect words="AS DU SHOP" className="font-bold  bg-clip-text text-white   py-4 text-4xl md:text-6xl " />

        <p className="text-white text-center md:tracking-wider mb-4 text-sm   ">
          L'Agence de Communication Visuelle <br />  et de Marketing Digital
        </p>

        <TypewriterEffect
          words={wordsb}
          className="text-center  max-w-60 md:max-w-72  font-sans font-light    text-sm    " />
 
         <SocialLink />
        
      </div>
    </div>


  );
}
