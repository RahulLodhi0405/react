import { createContext, useContext } from "react";

// Create the Todo context with default values
export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

// Custom hook to use the Todo context
export const useTodo = () => {
    return useContext(TodoContext);
};

// Export the Provider from the context
export const TodoProvider = TodoContext.Provider;
