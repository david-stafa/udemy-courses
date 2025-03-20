import { createContext, ReactNode, useState } from "react";
import { Todo } from "../models/todo";

interface TodosContextObj {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodosContextProvider = (props: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: todoText },
    ]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
