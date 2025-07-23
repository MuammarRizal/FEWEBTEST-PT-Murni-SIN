function AboutSection() {
  return (
    <section
      id="about"
      className="container-content py-12 sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center"
      aria-labelledby="features-heading"
    >
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-full lg:w-1/2">
        <img
          src="https://placehold.co/505x367"
          alt="Modern property features and amenities"
          className="w-full mx-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h4 className="title-section">About Us</h4>
        <h2 id="features-heading" className="subtitle-section">
          Discover an Extraordinary <br className="hidden sm:inline" />
          Property With Us
        </h2>

        <p className="description-section mb-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        <blockquote className="description-section border-l-2 border-gray-300 pl-4 sm:pl-6 italic my-4">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a.
        </blockquote>
      </div>
    </section>
  );
}

export default AboutSection;
