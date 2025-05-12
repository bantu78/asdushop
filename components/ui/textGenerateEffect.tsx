"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.8,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.8),
      }
    );
  }, [scope.current]);

 
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
           const textColorClass = 
           idx === 0 ? 'text-[#f08125] dark:text-[#f08125]' :
           idx === 2 ? 'text-[#1c9cdb] dark:text-[#1c9cdb]' :
           'text-black dark:text-white';
     
          return (
            <motion.span
              key={word + idx}
              className={[
                textColorClass,
                'opacity-0  '
              ].join(' ')}
               
              style={{
                filter: filter ? "blur(10px)" : "none",
                  }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-center leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
