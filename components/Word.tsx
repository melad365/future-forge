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
            As the CEO of FutureForge, I am honored to lead a team of passionate professionals dedicated
            to bringing you the very best in technology solutions. Our commitment to you goes beyond just
            providing services; it's about forging lasting partnerships that drive your success. In a 
            world where technology evolves rapidly, we stand as your trusted ally, ready to navigate 
            challenges, uncover opportunities, and ensure that your digital journey is not just seamless
            but exceptional. At FutureForge, we believe in the transformative power of technology to
            elevate businesses and redefine possibilities. Our team is here to listen, understand, and
            deliver tailored solutions that align with your unique goals.

            Thank you for choosing us as your technology partner. Together, let's embark on a journey of
            innovation, growth, and unparalleled success.


          </p>
        </div>
      </div>
    </div>
  );
}

export default Word;
