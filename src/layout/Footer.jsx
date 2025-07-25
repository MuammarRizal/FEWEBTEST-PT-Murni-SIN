import List from "../components/List";
import ListItem from "../components/ListItem";

function Footer() {
  const dataCompany = [
    "123 Avenue, New York",
    "+(1600) 456 7890",
    "yourid@example.com",
    "9:00 AM - 7:00 PM",
    "@officialpage",
  ];
  const dataHelpcenter = [
    "Call Center",
    "Official Pages",
    "Frequently Asked Question",
    "History Background",
    "Newsletter Subscription",
  ];
  const navigation = ["Home", "About", "Provide", "Benefits", "Contact"];
  const dataSocialMedia = ["google", "facebook", "twitter", "linkedin"];
  return (
    <footer
      className="w-full bg-secondary text-gray-300 pt-20 pb-10"
      role="contentinfo"
    >
      <div className="container-content mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/icons/icon-logo.png"
                alt="Skatcher Logo"
                loading="lazy"
              />
              <span className="text-white text-xl font-bold italic font-montserrat lg:text-msn-22">
                Skatcher
              </span>
            </div>

            <p className="text-white text-sm leading-relaxed lg:text-msn-12 lg:w-max hidden sm:block">
              Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
              <br className="hidden lg:block" />
              elit. Aenean commodo ligula eget dolor. Aenean massa.{" "}
              <br className="hidden lg:block" />
              Cum sociis natoque penatibus et magnis dis parturient{" "}
              <br className="hidden lg:block" />
              montes, nascetur ridiculus mus.
            </p>

            <p className="text-white text-msn-12 leading-relaxed lg:text-msn-12 lg:w-max block sm:hidden w-max">
              Lorem ipsum dolor sit amet, consectetuer adipis <br />
              cing elit. Aenean commodo ligula eget dolor. <br />
              Aenean massa.
            </p>

            <div className="flex gap-3 mt-6">
              {dataSocialMedia.slice(0, 4).map((icon, index) => (
                <a
                  key={index}
                  href={`/assets/images/icons/icon-${icon}.png`}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${icon}`}
                >
                  <img
                    src={`/assets/images/icons/icon-${icon}.png`}
                    alt={icon}
                    className="w-5 h-5"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-1 justify-between">
            <List data={dataCompany}>{"Company"}</List>
            <List data={navigation}>{"Features"}</List>

            <div className="hidden sm:block">
              <List data={dataHelpcenter}>{"Help Center"}</List>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 mt-20 hidden sm:flex">
          <p className="text-footer transition">Terms & Condition</p>
          <p className="text-footer text-center md:text-left">
            &copy; 2022 Skatcher. All Rights Reserved
          </p>
          <p className="text-footer hover:text-white transition">
            Privacy & Policy
          </p>
        </div>

        <div className="mt-20 block sm:hidden">
          <p className="text-footer text-msn-10">
            &copy; 2022 Skatcher. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
