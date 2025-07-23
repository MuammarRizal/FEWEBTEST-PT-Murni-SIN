function ContentSection({
  title,
  subtitlePc,
  subtitleMb,
  description,
  image,
  children,
}) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center md:text-left">
      <h4 className="title-section">{title}</h4>

      <h2 id="features-heading" className="subtitle-section hidden sm:inline">
        {subtitlePc}
      </h2>

      {subtitleMb && (
        <h2
          id="features-heading"
          className="subtitle-section inline sm:hidden !leading-[1.5]"
        >
          {subtitleMb}
        </h2>
      )}

      {image && (
        <div className="w-full mb-4 md:mb-6 block lg:hidden">
          <img
            src={image}
            alt={subtitlePc}
            className="w-full mx-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      )}

      <p className="description-section mb-6">{description}</p>

      {children}
    </div>
  );
}

export default ContentSection;
