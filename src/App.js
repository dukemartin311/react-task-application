import { useState, useEffect } from "react";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from "axios";

require("./styles/index.css");

const baseURL = "http://localhost:8080/api/v1/tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        setTasks(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  const addTask = (task) => {
    axios
      .post(baseURL + "/addTask", task)
      .then((response) => {
        console.log(response);
        setTasks([...tasks, response.data]);
      })
      .catch(() => {
        console.log("error");
      });

    console.log(task);
  };

  const deleteTask = (id) => {
    axios
      .delete(baseURL + "/deleteTask/" + id)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)));

    console.log("Task deleted : " + id);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAddTask={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
