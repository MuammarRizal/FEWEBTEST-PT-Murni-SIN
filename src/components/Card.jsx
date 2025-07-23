function Card({ index, title, icon, description }) {
  return (
    <div
      key={index}
      className="bg-gray-50 py-4 sm:px-6 sm:py-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div
        className={`${
          index === 0 ? "bg-primary" : ""
        } text-primary mb-6 rounded-full w-[70px] h-[70px] flex justify-center items-center mx-auto md:mx-[unset]`}
      >
        <img src={icon} alt={title} loading="lazy" />
      </div>
      <h3 className="text-msn-14 sm:text-msn-18 font-semibold text-secondary mb-2 text-center sm:text-start">
        {title}
      </h3>
      <p
        className="text-msn-10 sm:text-sm text-gray-soft leading-relaxed text-center sm:text-start"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <img
        src="/assets/images/icons/icon-arrow-right-small-primary.png"
        alt="icon"
        className="mt-4 hidden sm:block"
      />
    </div>
  );
}

export default Card;
