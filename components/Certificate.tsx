import React from "react";

function Certificate() {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="container mx-auto py-12 px-4">
        <h1
          className="text-3xl font-bold text-center
        after:content-[''] after:block after:h-1 after:w-20 after:bg-[#F8A600] after:mt-2 after:mx-auto after after:shadow-md after:mb-4
        md:text-3xl lg:text-5xl
        "
        >
          Certificate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="mb-8 p-4
          "
          >
            <img
              src="https://picsum.photos/1920/1080"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="mb-8 p-4">
            <img
              src="https://picsum.photos/1920/1080"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="mb-8 p-4">
            <img
              src="https://picsum.photos/1920/1080"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
