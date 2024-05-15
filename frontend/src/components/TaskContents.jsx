import React, { useEffect, useState } from "react";
import axios from 'axios';
import TaskGrid from "./TaskGrid";

const TaskContents = ({ selectedOption }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        console.log("api response: ", response.data);
        setTasks(response.data);
      } catch (err) {
        console.log("error fetching tasks: ", err);
      }
    };
    fetchData();
  }, []);

  const filterTasks = (tasks, selectedOption) => {
    switch (selectedOption) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter(task => task.taskStatus === true);
      case "pending":
        return tasks.filter(task => task.taskStatus === false);
      case "archived":
        return tasks.filter(task => task.taskStatus === "archived");
      default:
        return tasks;
    }
  };

  return (
    <div>
      {tasks ? <TaskGrid tasks={filterTasks(tasks, selectedOption)} /> : 'Loading...'}
    </div>
  );
};

export default TaskContents;
