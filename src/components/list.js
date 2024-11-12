import TodoItem from "./item";

function TodoList(props) {
    const { todos } = props;
  return (
    <ul className="list-group">
      {todos.map((item) => {
        return <TodoItem 
            text={item.text}
            isCompleted={item.isCompleted} 
            />;
      })}
    </ul>
  );
}

export default TodoList;
