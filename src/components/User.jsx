import userStore from "../store/userStore";
import themeStore from "../store/themeStore";
import ThemeToggle from "./ThemeToggle";

function User() {
  const { user, setUser, clearUser } = userStore();
  const { theme } = themeStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    setUser({ name, email });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        User Profile with Zustand
      </h1>

      {/* User Profile Form */}
      <form
        onSubmit={handleSubmit}
        className={`p-6 rounded-lg shadow-md w-full max-w-md ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-800 text-gray-100"
        }`}
      >
        <div className="mb-4">
          <label
            className={`block mb-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`w-full p-2 border rounded ${
              theme === "light"
                ? "bg-white text-gray-900 border-gray-300"
                : "bg-gray-700 text-gray-100 border-gray-600"
            }`}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className={`block mb-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`w-full p-2 border rounded ${
              theme === "light"
                ? "bg-white text-gray-900 border-gray-300"
                : "bg-gray-700 text-gray-100 border-gray-600"
            }`}
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
        >
          Save Profile
        </button>
      </form>

      {/* Display user info */}
      <div className="mt-6 text-center text-gray-900">
        <h2 className="text-xl font-semibold mb-2">User Info</h2>
        <p>Name: {user.name || "Not set"}</p>
        <p>Email: {user.email || "Not set"}</p>
        <button
          onClick={clearUser}
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Clear Profile
        </button>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}

export default User;
