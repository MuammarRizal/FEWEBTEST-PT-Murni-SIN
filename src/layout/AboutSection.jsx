function AboutSection() {
  return (
    <section
      id="about"
      className="container-content mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between items-center"
      aria-labelledby="features-heading"
    >
      {/* Image Container - Tetap sama persis */}
      <div className="flex-shrink-0 w-full lg:w-1/2 mt-6 lg:mt-0">
        <img
          src="https://placehold.co/505x367"
          alt="Modern property features and amenities"
          className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      {/* Text Container - Tetap sama persis */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
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

        <blockquote className="border-l-2 border-gray-300 pl-6 italic text-gray-700 my-4 text-sm sm:text-msn-16 text-gray-soft leading-[1.4]">
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
