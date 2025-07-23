function ProvideSection() {
  return (
    <section
      id="Provide"
      className="py-12 md:py-16 relative"
      aria-labelledby="about-heading"
    >
      <div className="container-content flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        <div className="text-container flex flex-col w-full lg:w-1/2 md:text-left">
          <h4 className="title-section">Provide</h4>
          <h2 id="about-heading" className="subtitle-section">
            We Provide Many Features <br className="hidden md:block" />
            and Property Benefits
          </h2>

          <p className="description-section mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <ul className="space-y-3">
            {[
              "Lorem ipsum dolor sit amet, consectetuer",
              "Lorem ipsum dolor sit amet, consectetuer",
              "Lorem ipsum dolor sit amet, consectetuer",
            ].map((item, index) => (
              <li
                key={index}
                className=" flex items-start gap-2 justify-center md:justify-start"
              >
                <span className="text-gray-soft text-lg">✓</span>
                <span className="sm:text-msn-16 text-gray-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://placehold.co/520x390"
            alt="Modern property features and amenities"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ProvideSection;
