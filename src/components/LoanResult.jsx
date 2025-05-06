import { useContext } from "react";
import { ThemeContext } from "../App";

function LoanResult({
  monthlyPayment,
  currency,
  setCurrency,
  handleReset,
  formatCurrency,
}) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      {monthlyPayment > 0 && (
        <div className="mb-6">
          <h3
            className={`text-xl ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Monthly EMI: ${formatCurrency(monthlyPayment)}
          </h3>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div>
          <label
            className={`block mb-2 mx-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Currency
          </label>
          <select
            className={`p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <button
          className={`border py-2 px-6 rounded ${
            isDarkMode
              ? "border-purple-400 text-purple-400 hover:bg-purple-900"
              : "border-purple-500 text-purple-500 hover:bg-purple-100"
          }`}
          onClick={handleReset}
        >
          RESET TABLE
        </button>
      </div>
    </>
  );
}

export default LoanResult;
