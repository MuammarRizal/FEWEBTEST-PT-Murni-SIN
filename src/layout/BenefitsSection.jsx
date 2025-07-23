import Card from "../components/Card";
import ContentSection from "../components/ContentSection";
import TextContainer from "../components/TextContainer";

function BenefitsSection() {
  const benefitCards = [
    {
      icon: "/assets/images/icons/icon-air-conditioner.png",
      title: "Air Conditioned",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
      icon: "/assets/images/icons/icon-wifi.png",
      title: "Free WiFi",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
      icon: "/assets/images/icons/icon-swimming-pool.png",
      title: "Swimming Pool",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
      icon: "/assets/images/icons/icon-television.png",
      title: "Television",
      description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
  ];

  const benefitDetails = [
    {
      title: "Awesome Features",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
    {
      title: "Luxurious Interior Design",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
    {
      title: "Modern Concept",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 md:py-28 bg-white relative"
      aria-labelledby="benefits-heading"
    >
      <div className="container-content flex flex-col-reverse sm:flex-col lg:flex-row gap-10 md:gap-16">
        {/* Grid Card */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
          {benefitCards.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>

        <ContentSection
          title={"Benefits"}
          subtitlePc={"Explore More About Our Property & Benefits"}
          subtitleMb={"Explore More About Our Property & Benefits"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          }
        >
          {benefitDetails.map((item, index) => (
            <div key={index} className="mt-6">
              <TextContainer
                title={item.title}
                description={item.description}
                key={index}
              />
            </div>
          ))}
        </ContentSection>
      </div>
    </section>
  );
}

export default BenefitsSection;
