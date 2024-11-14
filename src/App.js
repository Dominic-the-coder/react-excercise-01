import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewForm from "./components/addnew";
import ItemList from "./components/list";

function App() {
  // change the static list to state list
  const [todos, setTodos] = useState([]);

const onTickComplete = (id) => {
  const newTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
  setTodos(newTodos);
  console.log(newTodos);

};

  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4 "
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <ItemList
            todos={todos}
            onItemDelete={(id) => {
              // filter OUT the student with the given id
              const newTodos = todos.filter((s) => s.id !== id);
              // update the newList with the setState function
              setTodos(newTodos);
            }}
            onTickComplete={onTickComplete} // Updated to pass onTickComplete here
          />
           <AddNewForm
            onNewItemAdded={(itemName) => {
              // clone the existing state
              const newTodos = [...todos];
              // push the new item into the newList
              newTodos.push({
                id: nanoid(), // generate id
                // id: newList.length + 1,
                text: itemName,
                isCompleted: false,
              });
              // update the newList with the setState function
              setTodos(newTodos);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
