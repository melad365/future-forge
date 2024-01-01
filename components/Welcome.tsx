import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  display: "swap",
});

function Welcome() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row ">
        <div
          className={`py-6 text-center px-4
        md:px-0 md:text-left flex-1
        `}
        >
          <h1
            className="text-xl font-black mb-2
        md:text-3xl lg:text-5xl lg:py-6 md:py-4 after:content-[''] after:block after:h-1 after:w-20 after:bg-[#F8A600] after:mt-2 after:mx-auto after after:shadow-md after:mb-4
          md:after:h-2 md:after:w-32 md:after:mt-4 md:after:mx-0 md:after:shadow-lg md:after:mb-6
        "
          >
            Welcome to FutureForge Solutions
          </h1>
          <p className="text-sm text-[#565757] md:text-base lg:text-lg">
            Welcome to FutureForge, where technology meets ingenuity to redefine possibilities.
            At FutureForge, we believe in the transformative power of innovation and are 
            dedicated to providing cutting-edge tech services that propel businesses
            into the future. Our team of skilled professionals is committed to delivering
            excellence in every line of code, ensuring that your digital ambitions are
            not just met but exceeded. Whether you're seeking bespoke software solutions,
            IT consulting, or digital transformation strategies, we are here to craft
            tailored answers to your technological challenges. Join us at FutureForge, 
            where tomorrow's technology is crafted today.
          </p>
          <button
            className="bg-[#F8A600] text-white px-6 py-3 mt-4 font-semibold
        hover:bg-[#f8cb00] shadow-md"
          >
            Read More
          </button>
        </div>
        <div className="px-4 md:flex-1">
          <div className="mt-4 overflow-hidden shadow-md ">
            <img
              src="https://picsum.photos/id/1/1920/1080"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
