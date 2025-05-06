import { useContext } from "react";
import { ThemeContext } from "../App";

function LoanForm({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  term,
  setTerm,
  calculateLoan,
}) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <h2
        className={`text-3xl font-bold mb-2 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Loan Calculator Dashboard
      </h2>

      <div className="flex flex-wrap -mx-2 mb-2">
        <div className="w-full max-w-[250px]  md:w-1/3 px-2 mb-4">
          <label
            className={`block mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Loan Amount
          </label>
          <input
            type="number"
            className={`w-full p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </div>
        <div className="w-full max-w-[250px]  md:w-1/3 px-2 mb-4">
          <label
            className={`block mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            className={`w-full p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
        <div className="w-full max-w-[250px] md:w-1/3 px-2 mb-4">
          <label
            className={`block mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Term (Years)
          </label>
          <input
            type="number"
            className={`w-full p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
          />
        </div>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 mb-5"
        onClick={calculateLoan}
      >
        CALCULATE
      </button>
    </div>
  );
}

export default LoanForm;
