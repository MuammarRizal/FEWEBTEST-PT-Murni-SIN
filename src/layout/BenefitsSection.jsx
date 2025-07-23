function BenefitsSection() {
  const benefitCards = [
    {
      icon: "/assets/images/icons/icon-air-conditioner.png",
      title: "Air Conditioned",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
      icon: "/assets/images/icons/icon-wifi.png",
      title: "Free WiFi",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
      icon: "/assets/images/icons/icon-swimming-pool.png",
      title: "Swimming Pool",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
      icon: "/assets/images/icons/icon-television.png",
      title: "Television",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
  ];

  const benefitDetails = [
    {
      title: "Awesome Features",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
    {
      title: "Luxurious Interior Design",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
    {
      title: "Modern Concept",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 md:py-28 bg-white relative"
      aria-labelledby="benefits-heading"
    >
      <div className="container-content flex flex-col-reverse sm:flex-col lg:flex-row gap-10 md:gap-16">
        {/* Grid Card */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
          {benefitCards.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 py-4 sm:px-6 sm:py-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`${
                  index === 0 ? "bg-primary" : ""
                } text-primary mb-6 rounded-full w-[70px] h-[70px] flex justify-center items-center mx-auto`}
              >
                <img src={item.icon} alt={item.title} loading="lazy" />
              </div>
              <h3 className="text-msn-14 sm:text-msn-18 font-semibold text-secondary mb-2 text-center sm:text-start">
                {item.title}
              </h3>
              <p
                className="text-msn-10 sm:text-sm text-gray-soft leading-relaxed text-center sm:text-start"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <img
                src="/assets/images/icons/icon-arrow-right-small-primary.png"
                alt="icon"
                className="mt-4 hidden sm:block"
              />
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h4 className="title-section">Benefits</h4>

          <h2
            id="benefits-heading"
            className="subtitle-section hidden sm:block"
          >
            Explore More About <br className="hidden md:block" />
            Our Property & Benefits
          </h2>

          <h2
            id="benefits-heading"
            className="subtitle-section block sm:hidden"
          >
            Explore More About <br />
            Property & Benefits
          </h2>

          <p className="description-section">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          {benefitDetails.map((item, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-msn-16 sm:text-msn-18 text-secondary font-semibold mb-2">
                {item.title}
              </h3>
              <p
                className="description-section"
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
