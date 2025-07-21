import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./components/button/Button";
import NavbarItem from "./components/header/NavbarItem";
import { dataSocialMedia, dataTopNavbar } from "./datas/data.header";
import { Navigation } from "swiper/modules";
import Navbar from "./layout/hero-section/navigation";

function App() {
  return (
    <>
      {/* Top Navbar */}
      <header className="w-full">
        <div className="container-content top-navbar flex flex-wrap items-center justify-between gap-4 bg-secondary px-4 py-2">
          <div className="flex gap-3">
            {dataTopNavbar.map(({ text, icon }) => (
              <NavbarItem key={text} text={text} icon={icon} />
            ))}
          </div>
          <div className="flex gap-3">
            {dataSocialMedia.map((icon, index) => (
              <NavbarItem key={index} icon={icon} />
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section id="hero-section" className="relative overflow-hidden">
          <div className="background-image absolute top-0 left-0 w-full h-full z-0">
            <img
              src="/assets/images/background-image.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container-content relative z-10">
            {/* Navbar */}
            <Navbar />

            {/* Hero Content */}
            <div className="main-container flex flex-col-reverse lg:flex-row items-center mt-12 gap-10">
              {/* Text Area */}
              <div className="text-container w-full lg:w-[60%] text-center lg:text-left">
                <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                  Discover Modern <br />
                  Single Property
                </h1>
                <p className="text-white text-opacity-80 text-sm md:text-base mt-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </p>

                <div className="button-container flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                  <Button className="bg-primary text-white">Overview</Button>
                  <Button className="border border-white text-white">
                    Overview
                  </Button>
                </div>
              </div>

              {/* Swiper Area */}
              <div className="swiper-container w-full lg:w-[35%]">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {[1, 2, 3].map((i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={`/assets/images/image-${i}.jpg`}
                        alt={`image-${i}`}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
