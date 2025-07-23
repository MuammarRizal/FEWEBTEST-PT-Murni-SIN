import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "./Button";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="background-image absolute top-0 left-0 w-full z-0">
        <img
          src="/assets/images/background-image.png"
          alt="Modern property exterior with clean lines and large windows"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container-content relative z-10">
        <div className="flex flex-col-reverse lg:flex-row mt-14 gap-10">
          {/* Text Area */}
          <div className="text-container w-full lg:w-[60%] text-center lg:text-left lg:mt-10">
            <h1
              id="hero-heading"
              className="text-white font-semibold text-3xl md:text-5xl leading-1 md:leading-snug"
            >
              Discover Modern <br />
              Single Property
            </h1>
            <p className="text-white text-opacity-80 text-sm md:text-base mt-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
              <br />
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              <br />
              penatibus et magnis dis parturient montes.
            </p>

            <div className="button-container flex flex-wrap justify-center lg:justify-start gap-3 mt-10">
              <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
                Overview
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-secondary transition-colors">
                Learn More
              </Button>
            </div>
            <div className="button-container flex flex-wrap justify-center lg:justify-start gap-24 mt-36">
              <div className="flex flex-col ms-2">
                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/icons/icon-location.png"
                    alt="Location icon"
                  />
                  <p className="md:text-4xl font-semibold text-black">4.500</p>
                </div>
                <h4 className="text-lg font-semibold mt-3">Our Square Feets</h4>
              </div>
              <div className="flex flex-col ms-2">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/icons/icon-stars.png"
                    alt="Star rating icon"
                  />
                  <p className="md:text-4xl font-semibold text-black">5.000</p>
                </div>
                <h4 className="text-lg font-semibold mt-3">Rates by 1.100</h4>
              </div>
            </div>
          </div>

          {/* Swiper Area */}
          <div className="swiper-container w-full lg:w-[425px] lg:h-[653px]">
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
};
