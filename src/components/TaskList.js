import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks, handleRemove}) {

 

  return (
    <div className="tasks">
      {tasks.map((task) => <Task key={task.text} text={task.text} category={task.category} tasks={tasks} setTasks={setTasks}/>)}
    </div>
  );
}

export default TaskList;
