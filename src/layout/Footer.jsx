import { dataSocialMedia } from "../datas/data.header";

function Footer() {
  return (
    <footer
      className="w-full bg-gray-900 text-gray-300 pt-20 pb-10"
      role="contentinfo"
    >
      <div className="container-content max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Grid Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Company Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/icons/icon-logo.png"
                alt="Skatcher Logo"
                loading="lazy"
              />
              <span className="text-white text-xl font-bold italic">
                Skatcher
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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

          {/* Links Section */}
          <div className="flex flex-wrap gap-10 flex-1 justify-between">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "123 Avenue, New York",
                  "+(1600) 456 7890",
                  "yourid@example.com",
                  "9:00 AM - 7:00 PM",
                  "@officialpage",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <img
                      src="/assets/images/icons/icon-arrow-right-small.png"
                      alt="icon arrow"
                      className="w-[4px] h-[6px] mt-1"
                    />
                    <span className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Features
              </h3>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Provide", "Benefits", "Contact"].map(
                  (type) => (
                    <li key={type} className="flex items-start gap-2">
                      <img
                        src="/assets/images/icons/icon-arrow-right-small.png"
                        alt="icon arrow"
                        className="w-[4px] h-[6px] mt-1"
                      />
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {type}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Help Center */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Help Center
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Call Center",
                  "Official Pages",
                  "Frequently Asked Question",
                  "History Background",
                  "Newsletter Subscription",
                ].map((type) => (
                  <li key={type} className="flex items-start gap-2">
                    <img
                      src="/assets/images/icons/icon-arrow-right-small.png"
                      alt="icon arrow"
                      className="w-[4px] h-[6px] mt-1"
                    />
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p className="hover:text-white transition">Terms & Condition</p>
          <p className="text-center md:text-left">
            &copy; 2022 Skatcher. All Rights Reserved
          </p>
          <p className="hover:text-white transition">Privacy & Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
