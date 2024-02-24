import React from "react";

const products = [
  {
    id: 1,
    name: "Technology Consulting",
    image: "https://images2.imgbox.com/cb/6c/Jn9C3wow_o.jpg",
    details: "Offering expert advice on technology choices, architecture, and best practices. As well as providing strategic guidance for technology adoption and digital transformation.",
  },
  {
    id: 2,
    name: "Web Application Development",
    image: "https://images2.imgbox.com/51/b9/TvNzawGk_o.jpg",
    details: "Building scalable, performant and responsive web applications for various purposes, such as e-commerce, content management, and collaboration platforms",
  },
  {
    id: 3,
    name: "Custom Software Development",
    image: "https://images2.imgbox.com/70/41/PrqLVF2W_o.jpg",
    details: "Designing and developing bespoke software applications tailored to the unique requirements of clients",
  },
  {
    id: 4,
    name: "Mobile App Development",
    image: "https://images2.imgbox.com/70/f8/T5D6pkRh_o.jpg",
    details: "Designing and Developing intuitive and feature-rich mobile applications for iOS and Android platforms",
  },
  {
    id: 5,
    name: "UI/UX Design",
    image: "https://images2.imgbox.com/76/e6/b1QOjz9I_o.jpg",
    details: "Creating intuitive and visually appealing user interfaces and user experiences for software applications focusing on usability and user satisfaction",
  },
];

function Product() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1
        className="text-3xl font-black mb-4 text-center
        after:content-[''] after:block after:h-1 after:w-20 after:bg-[#F8A600] after:mt-2 after:mx-auto after:shadow-md after:mb-4
        md:text-3xl lg:text-5xl
      "
      >
        Our Products
      </h1>
      <p
        className="text-center text-lg my-8
      md:text-xl lg:text-2xl text-gray-500
      "
      >
        At FutureForge, we specialize in delivering cutting-edge software solutions
        tailored to meet the diverse needs of businesses. Our product suite includes
        custom software applications, web and mobile solutions, and robust enterprise
        software, all designed to optimize operations, enhance efficiency, and drive
        digital transformation
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:my-12">
        {products.map((product) => (
          <a href="#" className="group relative block bg-black">
            <img
              alt="Developer"
              src={product.image}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-base font-semibold uppercase tracking-widest text-[#F8A600]">
                {product.name}
              </p>

              {/* <p className="text-xl font-bold text-white sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> */}

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                  {product.details}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
}

export default Product;
