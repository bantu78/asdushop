import React from 'react';
 import emojie_a from '../app/data/emojie.json'; // Or .json
 
 import dynamic from 'next/dynamic';
 
const DynamicDotLottiePlayer = dynamic(
  () => import('@dotlottie/react-player').then(mod => mod.DotLottiePlayer),
  {
    ssr: false,
    
  }
);

interface DynamicLottieProps { 
  isVisible: boolean; // Control visibility
 
}

const MyOptimizedLottie: React.FC<DynamicLottieProps> = ({  isVisible, ...props }) => {
  if (!isVisible) {
    return null; // Or a placeholder
  }

  return (
    <DynamicDotLottiePlayer
      src={emojie_a}
      autoplay
      loop
     
      className='w-30 h-30 mx-auto '
      {...props}
    />
  );
};

export default MyOptimizedLottie;
