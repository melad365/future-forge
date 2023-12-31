import React from "react";

function Word() {
  return (
    <div className=" bg-[#F2F2F2] md:my-24">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row md:py-20 md:gap-8">
        <div className="px-4 md:flex-1">
          <div className="mt-4 overflow-hidden shadow-md ">
            <img
              src="https://picsum.photos/id/1/1920/1080"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className={`py-6 text-center px-4md:px-0 md:text-left flex-1`}>
          <h1
            className="text-xl font-black mb-2 md:text-3xl lg:text-5xl lg:py-6 md:py-4 text-[#F8A600]
    "
          >
            Word from CEO
          </h1>
          <p
            className="text-md font-bold  py-2
    md:text-base lg:text-2xl after:content-[''] after:block after:h-1 after:w-20 after:bg-[#F8A600] after:mt-2 after:mx-auto after:mb-4
    md:after:h-2 md:after:w-40 md:after:mt-4 md:after:mb-6 md:after:mx-0
    "
          >
            READ THE MESSAGE FROM OUR CEO
          </p>
          <p className="text-sm text-[#565757] md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Word;
