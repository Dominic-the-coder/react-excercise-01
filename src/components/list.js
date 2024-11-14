import AddItem from "./item";

function ItemList(props) {
  const { todos, onItemDelete, onTickComplete } = props;
  return (
    <ul className="list-group ">
      {todos.map((item/*, index*/) => {
        return (
          <AddItem
            key={item.id}
            // num={index + 1}
            {...item}
            onItemDelete={(id) => {
              onItemDelete(id);
            }}
            onTickComplete={(id) => {
              onTickComplete(id);
            }}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;
