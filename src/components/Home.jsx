import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import LoanForm from "./LoanForm";
import LoanResult from "./LoanResult";
import AmortizationTable from "./AmortizationTable";

function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [currency, setCurrency] = useState("USD");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [calculated, setCalculated] = useState(false); // New state to control display

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = term * 12;

    const calculatedMonthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    setMonthlyPayment(calculatedMonthlyPayment);

    const schedule = [];
    let remainingBalance = loanAmount;

    for (let month = 1; month <= totalPayments; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = calculatedMonthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        remainingBalance: remainingBalance > 0 ? remainingBalance : 0,
      });
    }

    setAmortizationSchedule(schedule);
    setCalculated(true); 
  };

  const handleReset = () => {
    setAmortizationSchedule([]);
    setMonthlyPayment(0);
    setCalculated(false); 
  };

  const formatCurrency = (amount) => {
    return amount.toFixed(2);
  };

  return (
    <main
      className={`container mx-auto p-6 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <LoanForm
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        term={term}
        setTerm={setTerm}
        calculateLoan={calculateLoan}
      />

      {calculated && (
        <>
          <LoanResult
            monthlyPayment={monthlyPayment}
            currency={currency}
            setCurrency={setCurrency}
            handleReset={handleReset}
            formatCurrency={formatCurrency}
          />

          <AmortizationTable
            amortizationSchedule={amortizationSchedule}
            currency={currency}
            formatCurrency={formatCurrency}
          />
        </>
      )}
    </main>
  );
}

export default Home;
