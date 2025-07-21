import { dataSocialMedia, dataTopNavbar } from "../../datas/data.header";
import NavbarItem from "../../components/header/NavbarItem";

function Navbar() {
  return (
    <header className="w-full">
      <div className="container-content top-navbar flex items-center justify-between bg-secondary">
        <div className="flex gap-5">
          {dataTopNavbar.map(({ text, icon }) => (
            <NavbarItem key={text} text={text} icon={icon} />
          ))}
        </div>

        <div className="flex gap-5">
          {dataSocialMedia.map((icon, index) => (
            <NavbarItem key={index} icon={icon} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
