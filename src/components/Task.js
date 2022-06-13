import React from "react";

function Task({text, category, handleRemove, tasks, setTasks}) {

  function handleRemove(itemToBeRemoved) {
    const newTasks = tasks.filter((task) => task.text !== itemToBeRemoved)
    setTasks(newTasks)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleRemove(text)}>X</button>
    </div>
  );
}

export default Task;
