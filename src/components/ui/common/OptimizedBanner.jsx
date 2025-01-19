import React from 'react';
import { useEffect, useState } from 'react';

const OptimizedBanner = ({ 
  src, 
  alt,
  lowResSrc, // Optional low-res placeholder
//   width = 1200,
//   height = 400
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const imageLoader = new Image();
    imageLoader.src = src;
    
    imageLoader.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {/* Placeholder/low-res version */}
      {lowResSrc && !imageLoaded && (
        <img
          src={lowResSrc}
          alt={alt}
          className="w-full h-full object-cover"
        //   width={width}
        //   height={height}
        />
      )}

      {/* Main image with priority loading */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        // width={width}
        // height={height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
};

export default OptimizedBanner;