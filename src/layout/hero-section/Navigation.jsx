import { useState } from "react";
import { Menu, X } from "lucide-react"; // Atau pakai svg sendiri

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center gap-6 py-4  bg-gray-900">
      {/* Logo */}
      <div className="logo flex items-center gap-3">
        <img
          src="/assets/images/icons/icon-logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <h3 className="text-white font-montserrat font-semibold italic text-xl md:text-2xl">
          Skatcher
        </h3>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white md:hidden"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Items */}
      <div
        className={`w-full md:w-auto flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 ${
          menuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <div className="text-white text-sm md:text-base font-medium">About</div>
        <div className="text-white text-sm md:text-base font-medium">
          Services
        </div>
        <div className="text-white text-sm md:text-base font-medium">
          Contact
        </div>

        {/* Search Input */}
        <div className="relative flex rounded-l-full overflow-hidden">
          <input
            type="search"
            id="search-dropdown"
            className="p-2.5 text-sm w-48 bg-white text-gray-700 border border-gray-300 rounded-l-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Here"
            required
          />
          <button
            type="submit"
            className="p-2.5 h-full text-sm font-medium text-blue-500 bg-white border border-l-0 border-gray-300 rounded-r-full hover:bg-blue-50"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
