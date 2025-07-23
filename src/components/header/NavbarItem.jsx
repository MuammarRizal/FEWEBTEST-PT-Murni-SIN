function NavbarItem({ icon, text }) {
  return (
    <div className="item-navbar flex items-center gap-2 sm:gap-3">
      <img
        src={`/assets/images/icons/icon-${icon}.png`}
        alt={`icon ${icon}`}
        className="w-5 h-5 sm:w-4 sm:h-4"
      />
      {text && (
        <p className="hidden lg:block text-white text-sm lg:text-msn-12">
          {text}
        </p>
      )}
    </div>
  );
}

export default NavbarItem;
