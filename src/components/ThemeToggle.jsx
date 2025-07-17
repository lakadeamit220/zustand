import themeStore from "../store/themeStore";

function ThemeToggle() {
  const { theme, toggleTheme } = themeStore();

  return (
    <div className="mt-6">
      <button
        onClick={toggleTheme}
        className="bg-green-700 text-white p-2 rounded hover:bg-green-800"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
