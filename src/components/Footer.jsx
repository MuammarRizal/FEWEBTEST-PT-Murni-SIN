import { dataSocialMedia } from "../datas/data.header";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-gray-300 pt-16 pb-10"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/icons/icon-logo.png"
                alt="Skatcher Logo"
                className="w-10 h-10"
                loading="lazy"
              />
              <span className="text-white text-xl font-bold italic">
                Skatcher
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining modern living through innovative property development
              and exceptional customer service since 2010.
            </p>

            <div className="flex gap-4 mt-4">
              {dataSocialMedia.slice(0, 4).map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${icon.name}`}
                >
                  <img
                    src={icon.src}
                    alt=""
                    className="w-5 h-5"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Properties", "Services", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Property Types
            </h3>
            <ul className="space-y-2">
              {[
                "Apartments",
                "Condos",
                "Townhouses",
                "Luxury Villas",
                "Commercial",
              ].map((type) => (
                <li key={type}>
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

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <address className="not-italic">
              <p className="text-gray-400 mb-2">123 Property Ave</p>
              <p className="text-gray-400 mb-2">Downtown, City 10001</p>
              <p className="text-gray-400 mb-2">United States</p>
              <p className="text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-400">Email: info@skatcher.com</p>
            </address>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {currentYear} Skatcher Properties. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
