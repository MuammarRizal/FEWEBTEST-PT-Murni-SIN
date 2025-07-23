function NavbarItem({ icon, text, ...props }) {
  return (
    <div
      className="flex items-center gap-2 text-white text-msn-8 md:text-sm lg:text-msn-12"
      {...props}
    >
      <img
        src={`/assets/images/icons/icon-${icon}.png`}
        alt={`icon ${icon}`}
        className="w-2 h-2 sm:w-5 sm:h-5"
        loading="lazy"
      />
      {text && <p className="">{text}</p>}
    </div>
  );
}

export default NavbarItem;
