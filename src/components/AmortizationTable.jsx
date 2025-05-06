import { useContext } from "react";
import { ThemeContext } from "../App";

function AmortizationTable({ amortizationSchedule, currency, formatCurrency }) {
  const { isDarkMode } = useContext(ThemeContext);

  if (amortizationSchedule.length === 0) {
    return null;
  }

  return (
    <div
      className={`rounded shadow ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <h3
        className={`text-xl p-4 border-b ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        Amortization Schedule ({currency})
      </h3>
      <div className="overflow-x-auto max-h-96 overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className={isDarkMode ? "bg-gray-700" : "bg-gray-50"}>
              <th className="p-3 text-left sticky top-0 z-10 bg-inherit">
                Month
              </th>
              <th className="p-3 text-left sticky top-0 z-10 bg-inherit">
                Principal
              </th>
              <th className="p-3 text-left sticky top-0 z-10 bg-inherit">
                Interest
              </th>
              <th className="p-3 text-left sticky top-0 z-10 bg-inherit">
                Remaining Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {amortizationSchedule.map((row) => (
              <tr
                key={row.month}
                className={`border-b ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <td className="p-3">{row.month}</td>
                <td className="p-3">
                  {formatCurrency(row.principal)} {currency}
                </td>
                <td className="p-3">
                  {formatCurrency(row.interest)} {currency}
                </td>
                <td className="p-3">
                  {formatCurrency(row.remainingBalance)} {currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AmortizationTable;
