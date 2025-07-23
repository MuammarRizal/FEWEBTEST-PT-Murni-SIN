import ContentSection from "../components/ContentSection";

function AboutSection() {
  return (
    <section
      id="about"
      className="container-content py-12 sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center"
      aria-labelledby="features-heading"
    >
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-full lg:w-1/2 hidden lg:block">
        <img
          src="/assets/images/about-us.jpg"
          alt="Modern property features and amenities"
          className="w-full mx-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <ContentSection
        title="About Us"
        subtitlePc="Discover an Extraordinary Property With Us"
        subtitleMb="Discover anExtra- Ordinary Property"
        image={"/assets/images/about-us.jpg"}
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
        }
      >
        <blockquote className="description-section border-l-2 border-gray-300 pl-4 sm:pl-8 italic my-4">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a.
        </blockquote>
      </ContentSection>
    </section>
  );
}

export default AboutSection;
