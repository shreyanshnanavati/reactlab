import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <header className="h-16 dark:bg-gray-800 bg-white border-b dark:border-gray-700 border-gray-200  text-white px-4 flex items-center">
      <button
        className="p-2 rounded-2xl bg-teal-800 text-white ml-auto"
        onClick={handleTheme}
      >
        Switch Theme: {theme}
      </button>
    </header>
  );
}
