import React from "react";

function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 md:py-28 bg-white relative"
      aria-labelledby="benefits-heading"
    >
      <div className="container-content flex flex-col lg:flex-row gap-10 md:gap-16">
        {/* Grid Card */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: "/assets/images/icons/icon-air-conditioner.png",
              title: "Air Conditioned",
              description: "Lorem ipsum dolor sit <br>amet, consectetuer.",
            },
            {
              icon: "/assets/images/icons/icon-wifi.png",
              title: "Free WiFi",
              description: "Lorem ipsum dolor sit <br>amet, consectetuer.",
            },
            {
              icon: "/assets/images/icons/icon-swimming-pool.png",
              title: "Swimming Pool",
              description: "Lorem ipsum dolor sit <br>amet, consectetuer.",
            },
            {
              icon: "/assets/images/icons/icon-television.png",
              title: "Television",
              description: "Lorem ipsum dolor sit <br>amet, consectetuer.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`${
                  index === 0 ? "bg-primary" : ""
                } text-primary mb-6 rounded-full w-[70px] h-[70px] flex justify-center items-center`}
              >
                <img src={item.icon} alt={item.title} loading="lazy" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h4 className="text-sm sm:text-base text-primary font-semibold mb-2">
            Benefits
          </h4>
          <h2
            id="benefits-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug md:leading-snug mb-4"
          >
            Explore More About <br className="hidden md:block" />
            Our Property & Benefits
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            <br className="hidden sm:block" />
            commodo ligula eget dolor. Aenean massa.
          </p>

          {[
            {
              title: "Awesome Features",
              description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
            },
            {
              title: "Luxurious Interior Design",
              description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
            },
            {
              title: "Modern Concept",
              description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
            },
          ].map((item, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-sm sm:text-base text-secondary font-semibold mb-2">
                {item.title}
              </h3>
              <p
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
