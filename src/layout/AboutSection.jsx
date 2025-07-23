function AboutSection() {
  return (
    <section
      id="about"
      className="container-content py-12 sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center"
      aria-labelledby="features-heading"
    >
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-full lg:w-1/2 hidden lg:block">
        <img
          src="https://placehold.co/505x367"
          alt="Modern property features and amenities"
          className="w-full mx-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center md:text-left">
        <h4 className="title-section">About Us</h4>

        <h2 id="features-heading" className="subtitle-section hidden sm:inline">
          Discover an Extraordinary <br className="hidden sm:inline" />
          Property With Us
        </h2>

        <h2
          id="features-heading"
          className="subtitle-section inline sm:hidden !leading-[1.5]"
        >
          Discover anExtra- <br className="hidden sm:inline" />
          Ordinary Property
        </h2>

        <div className="w-full md:mb-6 block lg:hidden">
          <img
            src="/assets/images/about-us.jpg"
            alt="Modern property features and amenities"
            className="w-full mx-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        <p className="description-section mb-6 hidden sm:block">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        <p className="description-section my-6 block sm:hidden w-max">
          Lorem ipsum dolor sit amet, consectetuer
          <br /> adipiscing elit. Aenean commodo ligula <br />
          eget dolor. Aenean massa.
        </p>

        <blockquote className="description-section border-l-2 border-gray-300 pl-4 sm:pl-8 italic my-4 hidden sm:block">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a.
        </blockquote>

        <blockquote className="description-section border-l-2 border-gray-300 pl-4 sm:pl-8 italic my-4 block sm:hidden">
          Donec quam felis, ultricies nec, pellen <br />
          tesque eu, pretium quis, sem. Nulla
          <br />
          consequat massa quis enim.
        </blockquote>
      </div>
    </section>
  );
}

export default AboutSection;
