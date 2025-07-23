import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../components/button/Button";

const SwiperGallery = ({ images, isMobile }) => {
  return (
    <div
      className={`relative swiper-container w-full mt-5 ${
        isMobile
          ? "h-[250px] block sm:hidden"
          : "hidden sm:block sm:w-[350px] md:w-[400px] lg:w-[425px] sm:h-[500px] md:h-[600px] lg:h-[653px] mx-auto"
      }`}
    >
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        className="mySwiper h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/assets/images/${image}`}
              alt={`Modern property interior view ${index}`}
              className="w-full h-full rounded-lg object-cover"
              loading={index === 1 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      <div className="absolute top-1/2 -left-7 right-0 flex justify-between items-center px-2 -translate-y-1/2 z-10 w-[114%]">
        <button
          className="swiper-button-prev-custom text-white bg-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary-dark"
          aria-label="Previous slide"
        >
          <img src="/assets/images/icons/icon-arrow-left.png" alt="Previous" />
        </button>
        <button
          className="swiper-button-next-custom text-white bg-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary-dark"
          aria-label="Next slide"
        >
          <img src="/assets/images/icons/icon-arrow-right.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const assets_swiper_mb = [
    "image-1-unshplash.jpg",
    "image-2-unshplash.jpg",
    "image-3-unshplash.jpg",
  ];
  const assets_swiper_pc = [
    "image-pc-3.jpg",
    "image-pc-1.jpg",
    "image-pc-3.jpg",
  ];

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="background-image absolute top-0 left-0 w-full z-0">
        <img
          src="/assets/images/background-image.png"
          alt="Modern property exterior with clean lines and large windows"
          className="w-full h-[601px] object-cover"
          loading="lazy"
        />
      </div>

      <div className="container-content relative z-10">
        {/* Navbar */}
        <nav className="w-full flex flex-wrap justify-between items-center gap-6 py-4">
          {/* Logo */}
          <div className="logo flex items-center gap-3">
            <img
              src="/assets/images/icons/icon-logo.png"
              alt="Logo"
              className="w-msn-14 h-msn-14 md:w-8 md:h-8"
            />
            <h3 className="text-white font-montserrat font-semibold italic text-16 md:text-msn-22">
              Skatcher
            </h3>
          </div>

          {/* Toggle Button */}
          <div className="flex gap-4 md:hidden">
            <button className="text-white bg-primary h-[28px] w-[28px] flex items-center justify-center">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white md:hidden bg-primary h-[28px] w-[28px] flex items-center justify-center"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Items */}
          <div
            className={`w-full md:w-auto flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 ${
              menuOpen ? "flex" : "hidden"
            } md:flex`}
          >
            <div className="text-white text-sm md:text-msn-18 font-medium">
              About
            </div>
            <div className="text-white text-sm md:text-msn-18 font-medium">
              Services
            </div>
            <div className="text-white text-sm md:text-msn-18 font-medium">
              Contact
            </div>

            {/* Search Input */}
            <div className="relative flex rounded-l-full overflow-hidden">
              <input
                type="search"
                id="search-dropdown"
                className="py-2.5 px-6 h-[46px] text-sm w-36 md:w-64 lg:w-44 bg-white text-gray-700 border border-gray-300 rounded-l-full focus:ring-blue-500 focus:border-blue-500 md:hidden lg:inline"
                placeholder="Search Here"
                required
              />
              <button
                type="submit"
                className="p-2.5 h-[46px] text-sm font-medium text-blue-500 border border-gray-300 border-l-0 rounded-r-full bg-white hover:bg-blue-50 md:bg-transparent md:border-0 lg:bg-white lg:border-gray-300"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row mt-14 gap-10">
          {/* Text Section */}
          <div className="text-container w-full lg:w-[60%] md:text-center md:text-left lg:mt-10 flex flex-col md:items-center lg:items-start">
            <h1
              id="hero-heading"
              className="text-white font-semibold text-msn-34 md:text-4xl leading-tight md:leading-snug lg:leading-snug lg:text-msn-48 md:text-center lg:text-start w-max"
            >
              Discover Modern <br /> Single Property
            </h1>

            <p className="text-sm sm:text-msn-16 mt-6 md:mt-10 leading-relaxed md:text-center text-white-soft lg:text-start hidden sm:block">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>

            <div className="mobile block sm:hidden w-max">
              <p className="text-msn-14 mt-6 leading-relaxed text-white-soft">
                Lorem ipsum dolor sit amet, consectetuer
                <br /> adipiscing elit. Aenean commodo ligula
                <br /> eget dolor. Aenean massa.
              </p>
              <p className="text-msn-14 mt-6 leading-relaxed text-white-soft">
                Cum sociis natoque penatibus et magnis
                <br /> dis parturient montes.
              </p>
            </div>

            <div className="button-container flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-10">
              <Button className="bg-primary text-white hover:bg-primary-dark transition-colors text-msn-16 sm:text-msn-18 font-semibold">
                Overview
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-secondary bg-transparent lg:bg-transparent transition-colors text-msn-16 sm:text-msn-18 font-semibold">
                Learn More
              </Button>
            </div>

            {/* Mobile Swiper */}
            <SwiperGallery images={assets_swiper_mb} isMobile={true} />

            {/* Statistik */}
            <div className="flex flex-row justify-between sm:justify-center md:justify-start gap-10 sm:gap-16 md:gap-24 mt-10 lg:mt-28">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/icons/icon-location.png"
                    alt="icon location"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <p className="text-msn-28 sm:text-3xl md:text-msn-38 font-semibold text-secondary md:text-white lg:text-secondary">
                    4.500
                  </p>
                </div>
                <h4 className="md:text-white-soft lg:text-secondary text-msn-14 sm:text-msn-18 font-medium mt-1 sm:mt-2 text-secondary">
                  Our Square Feets
                </h4>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/icons/icon-stars.png"
                    alt="icon stars"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <p className="md:text-white lg:text-secondary text-msn-28 sm:text-3xl md:text-msn-38 font-semibold text-secondary">
                    5.00
                  </p>
                </div>
                <h4 className="md:text-white-soft lg:text-secondary text-msn-14 sm:text-msn-18 font-medium mt-1 sm:mt-2 text-secondary">
                  Rates by 1.100
                </h4>
              </div>
            </div>
          </div>

          {/* Desktop Swiper */}
          <SwiperGallery images={assets_swiper_pc} isMobile={false} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
