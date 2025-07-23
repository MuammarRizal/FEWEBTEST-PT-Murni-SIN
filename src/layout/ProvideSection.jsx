import ContentSection from "../components/ContentSection";

function ProvideSection() {
  return (
    <section
      id="Provide"
      className="pb-8 sm:pb-1 md:py-16 relative"
      aria-labelledby="about-heading"
    >
      <div className="container-content flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        <ContentSection
          title={"Provide"}
          subtitlePc={"We Provide Many Features and Property Benefits"}
          subtitleMb={"We Provide Many Features and Property Benefits"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          }
          image={"/assets/images/benefit.jpg"}
        >
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
        </ContentSection>

        <div className="w-full lg:w-1/2 justify-center hidden lg:flex">
          <img
            src="/assets/images/benefit.jpg"
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
