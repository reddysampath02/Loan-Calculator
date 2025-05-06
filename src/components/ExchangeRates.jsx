import { useContext } from "react";
import { ThemeContext } from "../App";

function ExchangeRates() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="container mx-auto p-6">
      <h2
        className={`text-3xl font-bold mb-6 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Exchange Rates (Live)
      </h2>
      <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
        This page would display live exchange rates from an API.
      </p>
    </div>
  );
}

export default ExchangeRates;
