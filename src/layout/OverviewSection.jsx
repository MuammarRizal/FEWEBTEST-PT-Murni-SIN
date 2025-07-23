function OverviewSection() {
  const features = [
    {
      title: "Awesome Features",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
    {
      title: "Luxury Property",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
  ];

  return (
    <section className="container-content bg-neutral-900 py-16 sm:py-20 md:py-28 text-white relative">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 ">
        {/* Heading */}
        <h1 className="text-sm sm:text-base font-semibold uppercase text-neutral-300">
          Overview
        </h1>

        {/* Title + Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              See Our Property Benefits <br className="hidden sm:block" />
              by Preview Video Below
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 w-full md:w-1/2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
        </div>

        {/* Video/Image */}
        <div className="w-full mt-10 md:mt-20">
          <img
            src="https://placehold.co/1160x400"
            alt="Property benefits preview video"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {features.map((feature, idx) => (
            <div key={idx}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
