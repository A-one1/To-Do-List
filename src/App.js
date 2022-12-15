import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {

  const[toDo,setToDo] = useState([
    {"id": 1, "title":"Task 1", "status": false},
    {"id": 2, "title":"Task 2", "status": false},

    
  ])
  return (
    <div className="App">
      <br />
      <h2>To Do List</h2>
    </div>
  );
}

export default App;
