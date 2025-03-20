import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <>
      <ul>
        {todosCtx.items.map((item) => (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            onRemoveTodo={todosCtx.removeTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
