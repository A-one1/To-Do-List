import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({toDo, markDone, setUpdateData, deleteTask} ) => {
    return(
        <>
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
                <span title="markDone" onClick={(e) => markDone(task.id)}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>

                {task.status ? null : (
                  <span
                    title="Edit"
                    onClick={(e) =>
                      setUpdateData({
                        id: task.id,
                        title: task.title,
                        status: task.status,
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span title="Delete" onClick={() => deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          </React.Fragment>
        );
      })
    }
    
    </>
    )
};

export default ToDo;
