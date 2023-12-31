import React from "react";
import { IconChartDots3 } from "@tabler/icons-react";

const services = [
  {
    id: 1,
    name: "AutoCad Design",
    description:
      "Find exactly what you’re looking for in our extensive inventory or request a quote on some of those hard-to-find metals and alloys.",
  },
  {
    id: 2,
    name: "Aluminum Die Casting",
    description:
      "Find exactly what you’re looking for in our extensive inventory or request a quote on some of those hard-to-find metals and alloys.",
  },
  {
    id: 3,
    name: "Aluminum extrusion",
    description:
      "Find exactly what you’re looking for in our extensive inventory or request a quote on some of those hard-to-find metals and alloys.",
  },
  {
    id: 4,
    name: "Aluminum Fabrication",
    description:
      "Find exactly what you’re looking for in our extensive inventory or request a quote on some of those hard-to-find metals and alloys.",
  },
];

function Services() {
  return (
    <div className="container mx-auto px-4 md:my-16">
      <h1
        className="text-4xl font-bold text-center mt-10 mb-10
        after:content-[''] after:block after:h-1 after:w-20 after:bg-[#F8A600] after:mt-2 after:mx-auto after after:shadow-md after:mb-4
        md:text-3xl lg:text-5xl
        "
      >
        Services
      </h1>
      <p
        className="text-center text-[#565757] mb-10
      md:text-lg lg:text-xl
      "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            className="mb-8 p-4
            
          "
            key={service.id}
          >
            <IconChartDots3 className="mx-auto" size={48} />
            <h1
              className="text-xl font-semibold text-center text-[#F8A600] my-2
            md:text-2xl lg:text-3xl
            "
            >
              {service.name}
            </h1>
            <p
              className="text-[#565757]
            text-center md:text-lg lg:text-xl
            "
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
