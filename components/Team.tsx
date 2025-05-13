import { team } from "@/app/data";
 import { TeamUI } from "./ui/TeamUI";
import { ColourfulText } from "./ui/ColourfulText";

 
export function Team() {
  
  return (
    <div className=" px-4 mx-auto">
     
          <h1 className="text-2xl    font-bold text-center text-white relative z-2 font-sans pb-10">
           <ColourfulText text="Notre Équipe" /> 
          </h1>
          <TeamUI testimonials={team} />
          </div>
  )
}
