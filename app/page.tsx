import { Hero } from "@/components/Hero";
 import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { testimonials } from "./data";
import ThreedDCard from "@/components/ThreedDCard";

 
const navItems = [
  {
   title: "Accueil",
    href: "/",
    icon: <GoHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
   title: "A propos",
    href: "#about",
    icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
   title: "Réalisations",
    href: "#project",
    icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
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
     
        <ThreedDCard/>  
      </main>
     
  );
}
