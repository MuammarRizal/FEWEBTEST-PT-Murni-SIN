export const SectionHeader = ({
  subtitle,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      {subtitle && (
        <h4 className="text-base text-primary font-semibold mb-2">
          {subtitle}
        </h4>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      )}
    </div>
  );
};
