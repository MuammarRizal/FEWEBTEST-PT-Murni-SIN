function NavbarItem({ icon, text }) {
  return (
    <div className="item-navbar flex gap-3">
      <img src={`/assets/images/icons/icon-${icon}.png`} alt={`icon ${icon}`} />
      {text && <p className="text-white fs-12">{text}</p>}
    </div>
  );
}

export default NavbarItem;
