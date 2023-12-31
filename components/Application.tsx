import React from "react";

const applications = [
  {
    title: "1. Lorem ipsum dolor sit amet",
    description:
      "The aluminum billet is the raw material for aluminum extruded profiles, it is a solid block of aluminum with the size depending on the size of your desired part. The larger the desired part, the larger the billet. Our Primary aluminum billets of 7” and 8” in diameter and 225” in length are imported or locally bought to produce our aluminium extruded profiles.",
    img: "https://picsum.photos/id/6/1920/1080",
  },
  {
    title: "2. Lorem ipsum dolor sit amet",
    description:
      "The aluminum billet is the raw material for aluminum extruded profiles, it is a solid block of aluminum with the size depending on the size of your desired part. The larger the desired part, the larger the billet. Our Primary aluminum billets of 7” and 8” in diameter and 225” in length are imported or locally bought to produce our aluminium extruded profiles.",
    img: "https://picsum.photos/id/7/1920/1080",
  },
  {
    title: "3. Lorem ipsum dolor sit amet",
    description:
      "The aluminum billet is the raw material for aluminum extruded profiles, it is a solid block of aluminum with the size depending on the size of your desired part. The larger the desired part, the larger the billet. Our Primary aluminum billets of 7” and 8” in diameter and 225” in length are imported or locally bought to produce our aluminium extruded profiles.",
    img: "https://picsum.photos/id/8/1920/1080",
  },
  {
    title: "4. Lorem ipsum dolor sit amet",
    description:
      "The aluminum billet is the raw material for aluminum extruded profiles, it is a solid block of aluminum with the size depending on the size of your desired part. The larger the desired part, the larger the billet. Our Primary aluminum billets of 7” and 8” in diameter and 225” in length are imported or locally bought to produce our aluminium extruded profiles.",
    img: "https://picsum.photos/id/9/1920/1080",
  },
  {
    title: "5. Lorem ipsum dolor sit amet",
    description:
      "The aluminum billet is the raw material for aluminum extruded profiles, it is a solid block of aluminum with the size depending on the size of your desired part. The larger the desired part, the larger the billet. Our Primary aluminum billets of 7” and 8” in diameter and 225” in length are imported or locally bought to produce our aluminium extruded profiles.",
    img: "https://picsum.photos/id/10/1920/1080",
  },
];

function Application() {
  return (
    <div className="container mx-auto py-8 px-4 md:py-20 md:gap-8">
      <h1
        className="text-xl font-bold mb-2 md:text-xl lg:text-2xl lg:py-10 md:py-4
        text-center
      "
      >
        Holisticly brand sustainable solutions rather than clicks-and-mortar
        applications. Phosfluorescently whiteboard fully tested initiatives.
      </h1>

      <div className="flex flex-col md:gap-8">
        {applications.map((item, index) => (
          <div
            key={index}
            className={`
            flex flex-col
            ${
              index % 2 == 0
                ? "md:flex-row-reverse py-6 text-center px-4md:px-0 md:text-left flex flex-1 gap-4 md:gap-8 "
                : "md:flex-row py-6 text-center px-4md:px-0 md:text-left flex flex-1 gap-4 md:gap-8"
            }
             
            `}
          >
            <div className="md:flex-1">
              <div className="mt-4 overflow-hidden shadow-md ">
                <img src={item.img} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:flex-1">
              <h1 className="text-base font-black mb-2 md:text-xl pt-4 lg:text-3xl lg:py-6 md:py-4 text-[#F8A600]">
                {item.title}
              </h1>
              <p className="text-sm text-[#565757] md:text-base lg:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Application;
