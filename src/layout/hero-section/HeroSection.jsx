import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/button/Button";
import "./HeroSection.css";
import { Navigation } from "swiper/modules";
import NavigationHero from "./navigation";

function HeroSection() {
  return (
    <section id="hero-section">
      <div className="background-image absolute top-0 left-0">
        <img
          src="/assets/images/background-image.png"
          alt=""
          className="img-image"
        />
      </div>

      <div className="container-content relative z-10">
        <NavigationHero />
        <div className="main-container flex">
          <div className="text-container w-[60vw]">
            <h1 className="font-semibold fs-48 text-white">
              Discover Modern <br />
              Single Propery
            </h1>
            <div className="description text-white-soft fs-16">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              <br />
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              <br />
              penatibus et magnis dis parturient montes.
            </div>

            <div className="button-container flex gap-3 mt-12">
              <Button className={"bg-primary"}>Overview</Button>
              <Button className={"border border-white"}>Overview</Button>
            </div>
          </div>
          <div className="swiper-container w-[35vw]">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/assets/images/image-1.jpg" alt="image-1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/image-1.jpg" alt="image-1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/image-1.jpg" alt="image-1" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
