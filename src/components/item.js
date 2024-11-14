function AddItem(props) {
  const { id, text, isCompleted, onItemDelete, onTickComplete } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button
            className="btn btn-sm btn-success"
            onClick={() => onTickComplete(id)}
          >
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button 
            className="btn btn-sm" 
            onClick={() => onTickComplete(id)}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          className="ms-2 mb-3"
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {text}
        </span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you want to delete this student?"
            );
            if (confirm) {
              // pass the id up to the StudentsList
              onItemDelete(id);
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default AddItem;
