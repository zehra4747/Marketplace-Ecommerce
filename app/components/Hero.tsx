
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="relative mt-10 md:mt-8"> {/* Added space after navbar */}
      {/* Large Screen Image */}
      <div className="hidden md:block w-full relative">
        <Image
          src="/Rectangle 2.png"
          alt="Hero Image"
          width={1440}
          height={663}
          className="w-full h-auto max-h-[80vh] object-cover"
        />
      </div>

      {/* Small Screen Image */}
      <div className="md:hidden w-full relative">
        <Image
          src="/profile.png"
          alt="Hero Image"
          width={1440}
          height={663}
          className="w-full h-auto max-h-[80vh] object-cover"
        />
      </div>
        
         

          {/* Heading */}
          <div className="absolute top-[620px] sm:top-[400px] md:top-[130px] left-4 sm:left-6 max-w-xl text-black text-left"> {/* Adjusted for large and small screens */}
            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-integral font-extrabold leading-snug sm:leading-normal md:leading-[64px] lg:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
          </div>

          {/* Description */}
          <div className="absolute top-[680px] sm:top-[300px] md:top-[320px] left-4 sm:left-6 w-full max-w-md text-gray-600 text-left"> {/* Adjusted for large and small screens */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
          </div>

          {/* Shop Now Button */}
       <Link href="/cart">  <button className='hover:bg-gray-700 bg-black'><div className="absolute top-[750px] sm:top-[400px] md:top-[420px] left-4 sm:left-6"> {/* Adjusted for large and small screens */}
            <div className="w-[180px] sm:w-[210px] bg-black h-[40px] sm:h-[52px] rounded-full text-center flex items-center justify-center">
              <div className="font-satoshi text-white text-xs sm:text-sm md:text-base">
                Shop Now
              </div>
            </div>
          </div></button> </Link>
        </div>

 
  );
};
