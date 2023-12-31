import React from "react";

function Head({ page }: { page: string }) {
  return (
    <div className="h-80 bg-cover bg-center bg-no-repeat relative">
      <h1
        className="text-3xl text-[#F8A600] font-bold absolute bottom-0 left-0 z-20 w-full h-full flex items-center justify-center uppercase
      md:text-3xl lg:text-5xl text-center 
      "
      >
        {page}
      </h1>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://picsum.photos/1920/1080"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}

export default Head;
