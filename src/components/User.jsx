import userStore from "../store/userStore";

function User() {
  // Access state and actions from the store
  const { user, setUser, clearUser } = userStore();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    setUser({ name, email });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">User Profile with Zustand</h1>

      {/* Form to update user */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>

      {/* Display user info */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">User Info</h2>
        <p>Name: {user.name || "Not set"}</p>
        <p>Email: {user.email || "Not set"}</p>
        <button
          onClick={clearUser}
          className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Clear Profile
        </button>
      </div>
    </div>
  );
}

export default User;
