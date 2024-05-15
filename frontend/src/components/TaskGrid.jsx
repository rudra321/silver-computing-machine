import React from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

const TaskGrid = ({ tasks, updateTaskStatus }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
      {tasks.map((task, index) => (
        <div key={index} className={task && task.taskStatus === true ? "bg-green-200 p-4 rounded-2xl shadow-md" : "bg-yellow-200 p-4 rounded-2xl shadow-md" }>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskGrid;
