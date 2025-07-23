function NavbarItem({ icon, text, ...props }) {
  return (
    <div
      className="flex items-center gap-2 text-white text-sm lg:text-msn-12"
      {...props}
    >
      <img
        src={`/assets/images/icons/icon-${icon}.png`}
        alt={`icon ${icon}`}
        className="w-4 h-4 sm:w-5 sm:h-5"
        loading="lazy"
      />
      {text && <p className="hidden sm:inline-block">{text}</p>}
    </div>
  );
}

export default NavbarItem;
