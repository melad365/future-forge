import React from "react";
import {
  IconWorld,
  IconUsers,
  IconMedal2,
  IconFlame,
} from "@tabler/icons-react";

const stats = [
  {
    id: 1,
    name: "Factories",
    number: 4,
    description: "Our factories",
    icon: <IconWorld size={50} color="#565757" />,
  },
  {
    id: 2,
    name: "Annual & Capacity",
    number: 4200,
    description: "Annual & Capacity",
    icon: <IconFlame size={50} color="#565757" />,
  },
  {
    id: 3,
    name: "Experience Years",
    number: 20,
    description: "Experience years",
    icon: <IconMedal2 size={50} color="#565757" />,
  },
  {
    id: 4,
    name: "Customers",
    number: 100,
    description: "Our customers",
    icon: <IconUsers size={50} color="#565757" />,
  },
];

function Stats() {
  return (
    <div className="bg-[#F2F2F2] my-8 md:my-12">
      <div className="container mx-auto py-8 px-4 md:py-12 ">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
            >
              {stat.icon}

              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#F8A600] md:text-3xl">
                  {stat.number}
                </h2>
                <span
                  className="text-base text-gray-600 
                md:text-lg md:font-bold
                "
                >
                  {stat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
