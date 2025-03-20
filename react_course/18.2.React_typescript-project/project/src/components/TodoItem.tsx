interface TodoItemProps {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
}

const TodoItem = ({ id, text, onRemoveTodo }: TodoItemProps) => {
  return (
    <>
      <li>{text}</li>
      <button onClick={() => onRemoveTodo(id)}>Delete</button>
    </>
  );
};

export default TodoItem;
