const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="row">
      <div className="col">
        <input
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="col-auto">
        <button type="submit" onClick={addTask} className="btn btn-success">
          Add Task
        </button>
      </div>
    </div>
  );
};
export default AddTaskForm;
