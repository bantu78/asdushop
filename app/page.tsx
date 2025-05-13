import { Hero } from "@/components/Hero";
 import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
  import { NUMB_PART, OPTIONS,   testimonials } from "./data";
import Project from "@/components/Project";
 import { Team } from "@/components/Team";
 import Partner from "@/components/Partner";
import { ColourfulText } from "@/components/ui/ColourfulText";
 
export default function Home() {
  return (
       <main className="relative flex flex-col gap-[32px] row-start-2 items-center  sm:items-start">
     
      <Hero/>
      <div className="h-[18rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
     
        <Project/> 
        <Team   />
       
      <div className="py-20 px-4 mx-auto">
      <h1 className="text-2xl    font-bold text-center text-white relative z-2 font-sans pb-10">
      <ColourfulText text="Partenaires" /> 
      </h1> 
      <Partner  slides={  Array.from(Array(NUMB_PART).keys()) } options={OPTIONS}  />
 
      </div>

      </main>
     
  )
}
