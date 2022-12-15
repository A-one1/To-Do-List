import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: true },
    { id: 3, title: "Task 3", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const addTask = () => {};
  const deleteTast = (id) => {};
  const markDone = (id) => {};
  const cancelUpdate = () => {};
  const changeTask = (e) => {};
  const updateTast = () => {};

  return (
    <div className="App">
      <br />
      <h2>To Do List</h2>
      <br />

      {toDo && toDo.length ? "" : "No Tasks"}
      {toDo &&toDo
      .sort((a,b) => a.id - b.id )
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
                    <FontAwesomeIcon icon={faCircleCheck} />
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
  );
}

export default App;
