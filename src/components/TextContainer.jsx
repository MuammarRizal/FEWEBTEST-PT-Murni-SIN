function TextContainer({ title, description, classname = {} }) {
  return (
    <div className={`text-container`}>
      <h3
        className={`text-msn-16 sm:text-msn-18 text-secondary font-semibold mb-2 ${classname.title}`}
      >
        {title}
      </h3>
      <p className={`description-section ${classname.description}`}>
        {description}
      </p>
    </div>
  );
}

export default TextContainer;
