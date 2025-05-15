import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <div className="w-full md:h-[32.5rem] h-[25rem] relative flex flex-col items-center justify-center bg-gray-100/10 rounded-lg overflow-hidden">
      {/* Background Skeleton */}
      <Skeleton className="absolute inset-0 w-full h-full" />
      
      {/* Content Container */}
      <div className="z-10 flex flex-col items-center space-y-4 p-4">
        {/* Welcome Text Skeleton */}
        <Skeleton className="h-4 w-32 mb-2" />
        
        {/* Logo Skeleton */}
        <Skeleton className="w-20 h-20 rounded-full" />
        
        {/* AS DU SHOP Title Skeleton */}
        <Skeleton className="h-12 w-64 md:w-80" />
        
        {/* Subtitle Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-48 md:w-64" />
          <Skeleton className="h-4 w-40 md:w-56" />
        </div>
        
        {/* Contact Info Skeleton */}
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-32 md:w-40" />
          <Skeleton className="h-3 w-36 md:w-44" />
        </div>
        
        {/* Social Links Skeleton */}
        <div className="flex space-x-3 mt-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
