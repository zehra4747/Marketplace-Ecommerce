import Image from 'next/image';
import React from 'react';

const Brands = () => {
  return (
    <div className="relative top-[517px]">
      <div className="flex justify-center">
        <Image 
          src="/Rectangle 3.png" 
          alt="Background Image" 
          className="w-full h-auto max-h-[122px] object-cover "
          width={1400}
          height={122}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <Image 
            src="/versace.png" 
            alt="Versace Logo" 
            className="w-[70px] sm:w-[166.48px] h-auto"
            width={166}
            height={33}
          />
          <Image
            src="/zara-logo-1 1.png" 
            alt="Zara Logo" 
            className="w-[70px] sm:w-[91px] h-auto"
            width={91}
            height={38}
          />
          <Image
            src="/gucci-logo-1 1.png" 
            alt="Gucci Logo" 
            className="w-[70px] sm:w-[156px] h-auto"
            width={156}
            height={36}
          />
          <Image
            src="/prada-logo-1 1.png" 
            alt="Prada Logo" 
            className="w-[70px] sm:w-[194px] h-auto"
            width={194}
            height={32}
          />
          <Image
            src="/Group (1).png" 
            alt="Group Logo" 
            className="w-[70px] sm:w-[206.79px] h-auto"
            width={206}
            height={33}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
