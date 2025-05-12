"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreedDCardUI";
import { projects } from "@/app/data";
import Image from "next/image";
import { ColourfulText } from "./ui/ColourfulText";

export default function ThreedDCard() {
  return (
<div className="py-10 px-4 mx-auto">
 
      <h1 className="text-2xl  font-bold text-center text-white relative z-2 font-sans pb-10">
       <ColourfulText text="Réalisations" /> 
      </h1>
        <div className="flex flex-wrap gap-6 justify-center w-full   ">
          
      {projects.map((item, idx) => (
        <CardContainer key={idx} className="inter-var flex-grow  basis-[calc(100%-1.5rem)] md:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-1.5rem)]">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-[16px] font-bold text-neutral-600 dark:text-white"
            >
              {item.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.des}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.img}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
</div>

  );
}
