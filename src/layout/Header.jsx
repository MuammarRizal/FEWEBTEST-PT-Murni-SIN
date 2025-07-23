import NavbarItem from "../components/header/NavbarItem";
import { dataSocialMedia, dataTopNavbar } from "../datas/data.header";

function Header() {
  return (
    <header className="w-full" role="banner">
      <div className="container-content top-navbar flex flex-wrap items-center justify-between gap-4 bg-secondary py-2">
        <div className="flex flex-wrap gap-3">
          {dataTopNavbar.map(({ text, icon }) => (
            <NavbarItem key={text} text={text} icon={icon} />
          ))}
        </div>
        <div className="flex gap-3">
          {dataSocialMedia.map((icon, index) => (
            <NavbarItem
              key={index}
              icon={icon}
              aria-label={`Follow us on ${icon.name}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
