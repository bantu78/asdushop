import { Hero } from "@/components/Hero";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { NUMB_PART, OPTIONS, testimonials } from "./data";
import Project from "@/components/Project";
import { Team } from "@/components/Team";
import Partner from "@/components/Partner";
import { ColourfulText } from "@/components/ui/ColourfulText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-[32px] row-start-2 items-center  sm:items-start overflow-hidden">

      <Hero />
      <div className="h-[18rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <Project />
      <Team />

      <div className="pt-30 px-4  md:mx-auto ">
        <h1 className="text-2xl    font-bold text-center text-white relative z-2 font-sans pb-10">
          <ColourfulText text="Nos Partenaires & Nos Clients" />
        </h1>
        <Partner slides={Array.from(Array(NUMB_PART).keys())} options={OPTIONS} />
      </div>

      <Footer />
    </main>

  )
}
