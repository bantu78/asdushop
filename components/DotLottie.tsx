import React from 'react';
 import emojie_a from '../app/data/emojie.json'; // Or .json
import { DotLottiePlayer } from '@dotlottie/react-player';

const DotLottie = () => {
  

  return (
   <div className='mx-auto h-30 w-30' >
      <DotLottiePlayer
        src={emojie_a}  
        autoplay
        loop 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default DotLottie;
