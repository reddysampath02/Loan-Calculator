import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-blue-500"
      } text-white p-4 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Loan Calculator</h1>
        <nav className="flex items-center">
          <Link
            to="/"
            className={`px-4 py-2 ${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded mx-1 hover:opacity-90`}
          >
            HOME
          </Link>
          <Link
            to="/exchange-rates"
            className={`px-4 py-2 ${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded mx-1 hover:opacity-90`}
          >
            EXCHANGE RATES (LIVE)
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 ${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded mx-1 hover:opacity-90`}
          >
            ABOUT
          </Link>
          <Link
            to="/error"
            className={`px-4 py-2 ${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded mx-1 hover:opacity-90`}
          >
            ERROR PAGE
          </Link>

          <div className="flex items-center ml-4">
            <div
              className={`w-12 h-6 ${
                isDarkMode ? "bg-gray-600" : "bg-gray-200"
              } rounded-full p-1 flex items-center cursor-pointer`}
              onClick={toggleDarkMode}
            >
              <div
                className={`w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                  isDarkMode
                    ? "transform translate-x-6 bg-blue-400"
                    : "bg-white"
                }`}
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
