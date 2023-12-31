import React, { useState } from "react";

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Services",
    url: "/services ",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    name: "Application",
    url: "/application",
  },
  {
    id: 5,
    name: "Process",
    url: "/process",
  },
];

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-20 container mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="logo.png" className="h-12" />
          </a>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm text-gray-500 hover:underline"
            >
              (555) 412-1234
            </a>
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleDrawer}
            >
              <svg
                className="h-6 w-6 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                {isDrawerOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.75 4a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.5A.75.75 0 0 1 1.75 4zm0 7a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75zm0 7a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`bg-gray-900 ${isDrawerOpen ? "block" : "hidden"} md:block`}
      >
        <div className="container mx-auto">
          <ul className="font-medium flex flex-col mt-4 gap-4 p-6 md:flex-row md:space-x-8 md:mt-0 bg-gray-800 md:bg-gray-900">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-white hover:text-[#F8A600]"
                  aria-current="page"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
