import React, { useState } from 'react'
import Header1 from '../components/Header1'
import TaskContents from '../components/TaskContents';
import AddTasks from '../components/AddTasks';
const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
        <Header1 setSelectedOption={setSelectedOption}/>
        <TaskContents selectedOption={selectedOption}/>
        <AddTasks/>
    </div>
  )
}

export default HomePage