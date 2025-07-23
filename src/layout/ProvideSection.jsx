function ProvideSection() {
  return (
    <section
      id="Provide"
      className="bg-gray-50 py-16 relative"
      aria-labelledby="about-heading"
    >
      <div className="container-content mx-auto px-4 flex flex-col lg:flex-row gap-18 justify-between items-center">
        <div className="text-container flex flex-col justify-center w-full lg:w-1/2">
          <h4 className="text-base text-primary font-semibold mb-2">Provide</h4>
          <h2
            id="about-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4"
          >
            We Provide Many Features <br />
            and Property Benefits
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
            <br />
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            <br />
            penatibus et magnis dis parturient montes.
          </p>

          <ul className="space-y-3">
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Lorem ipsum dolor sit amet, consectetuer</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Lorem ipsum dolor sit amet, consectetuer</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Lorem ipsum dolor sit amet, consectetuer</span>
            </li>
          </ul>
        </div>

        <div className="flex-shrink-0 w-full lg:w-fit mt-6 lg:mt-0">
          <img
            src="https://placehold.co/520x390"
            alt="Modern property features and amenities"
            className="w-full  mx-auto lg:mx-0 rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ProvideSection;
