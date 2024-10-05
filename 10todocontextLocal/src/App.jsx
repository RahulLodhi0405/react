import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './context'; // Import the correct provider
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  // Fix localStorage effect
  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    if (todosFromStorage && todosFromStorage.length > 0) {
      setTodos(todosFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {/* Apply background styles inline */}
      <div
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg)',
          backgroundSize: 'cover', // Cover entire area
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Don't repeat
          height: '100vh', // Full height of the viewport
          width: '100vw', // Full width of the viewport
        }}
      >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 bg-white bg-opacity-20 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">TODO APP</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
