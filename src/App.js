import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: true },
    { id: 3, title: "Task 3", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  const deleteTast = (id) => {};
  const markDone = (id) => {};
  const cancelUpdate = () => {};
  const changeTask = (e) => {};
  const updateTast = () => {};

  return (
    <div className="container App ">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <br />
          <h2>To Do List</h2>
          <br />
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
              <button
                type="submit"
                onClick={addTask}
                className="btn btn-success"
              >
                Add Task
              </button>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <input className="form-control " />
            </div>
            <div className="col-auto">
              <button className="btn btn-success">Update</button>
              <button className="btn btn-warning m-1">Cancel</button>
            </div>
          </div>
          <br />

          {toDo && toDo.length ? "" : "No Tasks"}
          {toDo &&
            toDo
              .sort((a, b) => a.id - b.id)
              .map((task, index) => {
                return (
                  <React.Fragment key={task.id}>
                    <div className="col taskBg">
                      <div className={task.status ? "done" : ""}>
                        <span className="taskNumber">{task.id} </span>
                        <span className="taskText">{task.title}</span>
                      </div>
                      <div className="iconsWrap">
                        <span>
                          <FontAwesomeIcon icon={faCircleCheck}
                          
                          />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
