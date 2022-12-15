export default function UpdateForm({ updateData, changeTask, updateTask, cancelUpdate }) {
  return (
    <div className="row">
      <div className="col">
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          className="form-control " />
      </div>
      <div className="col-auto">
        <button onClick={updateTask} className="btn btn-success">
          Update
        </button>
        <button onClick={cancelUpdate} className="btn btn-warning m-1">
          Cancel
        </button>
      </div>
    </div>
  );
}

