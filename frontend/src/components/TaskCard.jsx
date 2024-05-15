import React from "react";
import axios from 'axios';

const TaskCard = ({ task }) => {
  const handleCardClick = async () => {
    try{
      const response = await axios.put("http://localhost:5000/api/tasks",{
      title: title,
      description: description,
      taskStatus: taskStatus,
    })
    


    }catch(err){
      console.log("Error updating tasks: ", err)
    }

    
  }
  return (
    <div onClick={handleCardClick}>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-sf text-2xl font-bold p-2 whitespace-nowrap  break-words">
          {task && task.title}
        </h1>
      </div>
      <p className="font-sf text-xl p-2  break-words">
        {task && task.description}
      </p>
    </div>
  );
};

export default TaskCard;
