import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ExchangeRates from "./components/ExchangeRates";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

// Create context for dark mode
export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <Router>
        <div className={`app ${isDarkMode ? "dark" : ""}`}>
          <Header />
          <div
            className={`min-h-screen ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="/about" element={<About />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
