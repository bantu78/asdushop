"use client";

import React from "react";
import dynamic from 'next/dynamic';
import SocialLinks from './SocialLinks'; // Assuming this is your social links component

// Dynamically import ParticlesBg
// Ensure the path to your ParticlesBg component is correct
const DynamicParticlesBg = dynamic(() => import('./ParticlesBg'), {
  ssr: false, // Particles are client-side only, no need for SSR
  // You can add a simple loading fallback if you want, though often not necessary for a background
  // loading: () => <div style={{ position: 'absolute', inset: 0, backgroundColor: '#initial-bg-color-if-any' }} />
});

// ... (SocialLink interface, socialLinksData, wordsa definitions if they are in this file)

export default function Hero() {
  // Define wordsa if it's used here
  const wordsa = [
    { text: "L'Agence " },
    { text: "Digitale " },
    { text: "Qui " },
    { text: "Transforme " },
    { text: "Vos " },
    { text: "Idées." },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Render the dynamically imported ParticlesBg */}
      {/* Make sure to pass any required props, like 'id' */}
      <DynamicParticlesBg id="tsparticles-hero" />

      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {wordsa.map(word => word.text).join("")}
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Your compelling hero section subtitle goes here. Describe what you do and why it matters.
        </p>

        <SocialLinks className="mt-4 justify-center" /> {/* Ensure SocialLinks is imported */}

        <button className="mt-10 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}