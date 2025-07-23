import NavbarItem from "../components/NavbarItem";

function Header() {
  const dataTopNavbar = [
    {
      icon: "phone",
      text: "+(1600) 456 7890",
    },
    {
      icon: "email",
      text: "yourid@example.com",
    },
    {
      icon: "address",
      text: "123 Fifth Avenue",
    },
  ];

  const dataSocialMedia = ["google", "facebook", "twitter", "linkedin"];

  return (
    <header className="w-full" role="banner">
      <div className="w-full bg-secondary py-2">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 !w-max sm:!w-auto lg:gap-10">
            {dataTopNavbar.map(({ text, icon }) => (
              <NavbarItem key={text} text={text} icon={icon} />
            ))}
          </div>

          <div className="flex justify-center sm:justify-end gap-3 hidden md:flex">
            {dataSocialMedia.map((icon, index) => (
              <NavbarItem
                key={index}
                icon={icon}
                aria-label={`Follow us on ${icon.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
