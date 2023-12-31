const services = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://picsum.photos/id/1/1920/1080",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "https://picsum.photos/id/1/1920/1080",
  },
];

function ChooseUs() {
  return (
    <div className=" bg-[#F2F2F2] md:mt-24">
      <div className="container mx-auto py-8 px-4 md:flex-row md:py-24 md:gap-8">
        <div className={`py-6 px-4 md:px-0`}>
          <h1 className="text-xl font-black mb-2 md:text-3xl lg:text-5xl lg:py-6 md:py-4 text-[#F8A600] text-center">
            Why Choose Us?
          </h1>
          <p className="text-sm text-[#565757] md:text-base lg:text-lg w-[80%] md:w-[60%] mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {services.map((service) => (
            <div
              className="max-w-sm p-10 bg-white hover:shadow-md transition-shadow duration-300 ease-in-out
"
              key={service.id}
            >
              <svg
                className="w-10 h-10 mb-2 text-[#F8A600]"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                  {service.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
