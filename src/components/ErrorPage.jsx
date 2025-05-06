import { useContext } from "react";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        Something went wrong in the application.
      </h1>
      <button
        onClick={() => navigate("/")}
        className="mt-2 px-4 py-2 border border-blue-400 rounded text-blue-500 hover:bg-blue-50 transition"
      >
        GO HOME
      </button>
    </div>
  );
}

export default ErrorPage;
