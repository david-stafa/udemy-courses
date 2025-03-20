import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const textInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
