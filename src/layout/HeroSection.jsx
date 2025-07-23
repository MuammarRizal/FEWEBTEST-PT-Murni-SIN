import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../components/button/Button";
import { Navigation } from "swiper/modules";
import { Menu, X } from "lucide-react"; // Atau pakai svg sendiri
import { useState } from "react";
function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* <div className="img-container absolute top-0 z-10 opacity-[0.5]">
            <img src="/assets/images/hero-blueprint.png" alt="" />
          </div> */}
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
              className="w-8 h-8"
            />
            <h3 className="text-white font-montserrat font-semibold italic text-xl md:text-msn-22">
              Skatcher
            </h3>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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
                className="py-2.5 px-6 h-[46px] text-sm w-40 bg-white text-gray-700 border border-gray-300 rounded-l-full focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Here"
                required
              />
              <button
                type="submit"
                className="p-2.5 h-[46px] text-sm font-medium text-blue-500 bg-white border border-l-0 border-gray-300 rounded-r-full hover:bg-blue-50"
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

        <div className="flex flex-col-reverse lg:flex-row mt-14 gap-10">
          <div className="text-container w-full lg:w-[60%] text-center md:text-left lg:mt-10 flex flex-col md:items-center lg:items-start">
            <h1
              id="hero-heading"
              className="text-secondary lg:text-white font-semibold text-3xl md:text-4xl leading-tight md:leading-snug lg:leading-snug lg:text-msn-48 md:text-center lg:text-start"
            >
              Discover Modern <br />
              Single Property
            </h1>
            <p className=" text-sm sm:text-msn-16 mt-6 md:mt-10 leading-relaxed md:text-secondary md:text-center lg:text-white-soft lg:text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
              <br className="hidden sm:block" />
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque{" "}
              <br className="hidden sm:block" />
              penatibus et magnis dis parturient montes.
            </p>

            <div className="button-container flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-10">
              <Button className="bg-primary text-white hover:bg-primary-dark transition-colors text-msn-18 font-semibold">
                Overview
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-secondary bg-primary lg:bg-transparent transition-colors text-msn-18 font-semibold">
                Learn More
              </Button>
            </div>

            {/* Statistik */}
            <div className="button-container flex flex-col sm:flex-row justify-center md:justify-start gap-10 sm:gap-16 md:gap-24 mt-20 sm:mt-28">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/icons/icon-location.png"
                    alt="icon location"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <p className="text-2xl sm:text-3xl md:text-msn-38 font-semibold text-secondary">
                    4.500
                  </p>
                </div>
                <h4 className="text-base sm:text-msn-18 font-medium mt-2 text-secondary">
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
                  <p className="text-2xl sm:text-3xl md:text-msn-38 font-semibold text-secondary">
                    5.000
                  </p>
                </div>
                <h4 className="text-base sm:text-msn-18 font-medium mt-2 text-secondary">
                  Rates by 1.100
                </h4>
              </div>
            </div>
          </div>

          {/* Swiper Area */}
          <div className="swiper-container w-full sm:w-[350px] md:w-[400px] lg:w-[425px] sm:h-[500px] md:h-[600px] lg:h-[653px] mx-auto">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              aria-label="Property image gallery"
            >
              {[1, 2, 3].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src={"https://placehold.co/425x653"}
                    alt={`Modern property interior view ${i}`}
                    className="w-full h-auto rounded-lg object-cover"
                    loading={i === 1 ? "eager" : "lazy"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
