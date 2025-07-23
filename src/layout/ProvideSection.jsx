function ProvideSection() {
  return (
    <section
      id="Provide"
      className="pb-8 sm:pb-1 md:py-16 relative"
      aria-labelledby="about-heading"
    >
      <div className="container-content flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        <div className="text-container flex flex-col w-full lg:w-1/2 md:text-left">
          <h4 className="title-section">Provide</h4>
          <h2 id="about-heading" className="subtitle-section">
            We Provide Many
            <br className="block sm:hidden" /> Features{" "}
            <br className="hidden sm:block" />
            and <br className="block sm:hidden" />
            Property Benefits
          </h2>
          <div className="w-full lg:w-1/2 block sm:hidden mb-6">
            <img
              src="https://placehold.co/295x214"
              alt="Modern property features and amenities"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <p className="description-section mb-6 hidden sm:block">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <p className="description-section mb-6 block sm:hidden">
            Lorem ipsum dolor sit amet, consectetuer <br />
            adipiscing elit. Aenean commodo ligula
            <br />
            eget dolor. Aenean massa.
          </p>

          <ul className="space-y-3 hidden sm:block">
            {[
              "Lorem ipsum dolor sit amet, consectetuer",
              "Lorem ipsum dolor sit amet, consectetuer",
              "Lorem ipsum dolor sit amet, consectetuer",
            ].map((item, index) => (
              <li
                key={index}
                className=" flex items-start gap-2 justify-center md:justify-start"
              >
                <span className="text-gray-soft text-lg ">✓</span>
                <span className="sm:text-msn-16 text-gray-soft">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 block sm:hidden">
            {[
              "Lorem ipsum dolor sit amet, consect",
              "Lorem ipsum dolor sit amet, consect",
              "Lorem ipsum dolor sit amet, consect",
            ].map((item, index) => (
              <li
                key={index}
                className=" flex items-start gap-2 sm:justify-center md:justify-start"
              >
                <span className="text-gray-soft text-msn-14">✓</span>
                <span className="text-msn-14 text-gray-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 justify-center hidden sm:flex">
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
