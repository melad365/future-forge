import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://picsum.photos/id/1/1920/1080",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quod voluptate quos dolorum quae
        exercitationem quas voluptatibus quidem. Quisquam voluptatum, quibusdam,
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
              <p className="text-sm font-medium uppercase tracking-widest text-[#F8A600]">
                {product.name}
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
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
