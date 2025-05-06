import { useContext } from "react";
import { ThemeContext } from "../App";

function About() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="container mx-auto p-6">
      <h2
        className={`text-3xl font-bold mb-6 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        About This App
      </h2>
      <div className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
        <p className="mb-4">
          This Loan Calculator App is modern, single-page web application built
          using ,<strong> React JS </strong> and <strong> Material UI </strong>.
          It allows users to calculate loan EMIS (Equated Monthly Installments),
          view a detailed amortization schedule, and see real-time currency
          conversions of their EMI using live exchange rates.
        </p>
      </div>
    </div>
  );
}

export default About;
