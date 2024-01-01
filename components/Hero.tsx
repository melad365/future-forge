import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const sliders = [
    {
      title: "Transforming Your Visions into Technology",
      image: "https://picsum.photos/1920/1080",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    },
    {
      title: "Coding with Confidence, serving with passion",
      image: "https://picsum.photos/1920/1080",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="overflow-hidden">
      {sliders.map((slider, i) => (
        <div className="h-[40vh] w-full md:h-[50vh] lg:h-[60vh] relative">
          <div
            key={i}
            className="h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${slider.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              userSelect: "none",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="w-full h-full flex flex-col justify-center px-2 items-center text-center z-10">
              <h1
                className="text-xl font-bold text-white
              md:text-3xl lg:text-7xl
              "
              >
                {slider.title}
              </h1>
              <p
                className="text-white py-4 text-sm
              md:text-lg lg:text-xl
              "
              >
                {slider.subtitle}
              </p>
              <button className=" bg-[#F8A600] text-white px-6 py-3 mt-4 font-semibold rounded-md">
                Know more
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
