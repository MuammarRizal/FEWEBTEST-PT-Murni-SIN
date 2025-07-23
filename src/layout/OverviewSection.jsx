function OverviewSection() {
  const features = [
    {
      title: "Awesome Features",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
    {
      title: "Luxury Property",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
  ];

  return (
    <section className="container-content bg-secondary py-16 sm:py-20 md:py-28 text-white relative">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 ">
        <h1 className="text-sm sm:text-msn-18 font-semibold uppercase text-white-soft">
          Overview
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-msn-36 font-semibold leading-snug lg:leading-[1.5]">
              See Our Property Benefits <br className="hidden sm:block" />
              by Preview Video Below
            </h2>
          </div>

          <p className="description-section !text-white-soft">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
            <br />
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            <br />
            penatibus et magnis dis parturient montes.
          </p>
        </div>

        <div className="w-full mt-10 md:mt-20">
          <img
            src="https://placehold.co/1160x400"
            alt="Property benefits preview video"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {features.map((feature, idx) => (
            <div key={idx}>
              <h3 className="text-lg sm:text-msn-18 font-semibold mb-2">
                {feature.title}
              </h3>
              <p
                className="text-sm sm:text-msn-16 text-neutral-400 lg:leading-[1.5] text-white-soft w-max"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
