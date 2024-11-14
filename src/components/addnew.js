import { useState } from "react";

function AddNewForm(props) {
  const { onNewItemAdded } = props;
  const [itemName, setItemName] = useState("");
  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          value={itemName}
          required
          onChange={(event) => {
            // update the studetName state
            setItemName(event.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            // disable the button submit behaviour
            event.preventDefault();
            // check for empty string
            if (itemName === "") {
              alert("Please enter the name");
            } else {
              // passing the name back to the parent component
              onNewItemAdded(itemName);
              // reset the state
              setItemName("");
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNewForm;