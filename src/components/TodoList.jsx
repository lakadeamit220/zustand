import todoStore from "../store/todoStore";

function TodoList() {
  //const { todos, addTodo, toggleTodo, deleteTodo } = todoStore();
  const todos = todoStore((state) => state.todos);
  const addTodo = todoStore((state) => state.addTodo);
  const toggleTodo = todoStore((state) => state.toggleTodo);
  const deleteTodo = todoStore((state) => state.deleteTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.todo.value;
    if (text.trim()) {
      addTodo(text);
      e.target.reset();
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mt-6 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="todo"
          className="w-full p-2 border rounded"
          placeholder="Add a todo"
        />
        <button
          type="submit"
          className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => toggleTodo(todo.id)}
                className="text-blue-500 hover:underline mr-2"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
