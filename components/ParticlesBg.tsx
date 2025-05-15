import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesBg = (props: ParticlesComponentProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
          fullScreen: false, 
      background: {
        
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
          repulse: {
            distance: 200,
          },
          
        },
      },
      particles: {
        
        color: {
          value: "#d5d5d5",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as MoveDirection,
          enable: true,
          outModes: {
            default: "bounce" as OutMode,
          },
          random: true,
          speed: 1,
          straight: false,
          
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 285,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} 
   className="w-full h-full absolute top-0 left-0"
    />;
  }

  return null;
};

export default ParticlesBg;