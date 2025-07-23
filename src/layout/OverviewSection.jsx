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
    <section className="container-content bg-secondary py-16 sm:py-20 md:py-28 text-white relative">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 ">
        <h1 className="text-msn-14 sm:text-msn-18 font-semibold uppercase text-white-soft">
          Overview
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-msn-28 sm:text-3xl md:text-msn-36 font-semibold leading-snug md:leading-[1.5]">
              See Our Property Benefits <br className="hidden sm:block" />
              by Preview Video Below
            </h2>
          </div>

          <p className="description-section !text-white-soft hidden sm:block lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <p className="description-section !text-white-soft block w-max sm:hidden">
            Lorem ipsum dolor sit amet, consectetuer <br />
            adipiscing elit. Aenean commodo ligula
            <br />
            eget dolor. Aenean massa.
          </p>
        </div>

        <div className="w-full mt-10 md:mt-20 hidden sm:block">
          <iframe
            className="w-full  rounded-lg shadow-lg"
            height={400}
            src="https://www.youtube.com/embed/URJ7ogOACNM?si=BJech0NNd3KG-lI-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-10 md:mt-20 block sm:hidden">
          <iframe
            className="w-full h-[315px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/URJ7ogOACNM?si=BJech0NNd3KG-lI-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {features.map((feature, idx) => (
            <div key={idx}>
              <h3 className="text-msn-16 sm:text-msn-18 font-semibold mb-2">
                {feature.title}
              </h3>
              <p
                className="text-msn-12 sm:text-msn-16 text-neutral-400 lg:leading-[1.5] text-white-soft"
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
