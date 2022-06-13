import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState([...TASKS])
const [categories, setCategories] = useState([...CATEGORIES])
const [selectCategory, setSelectCategorie] = useState("All")

const shownTasks = tasks.filter((task) => {
  return selectCategory === "All" || task.category === selectCategory;
})

function handleNewTask(newItems) {
  setTasks([...tasks, newItems])

}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} setSelectCategorie={setSelectCategorie} tasks={tasks} setTasks={setTasks} selectCategory={selectCategory}/>
      <NewTaskForm categories={categories} tasks={tasks} setTasks={setTasks} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={shownTasks} setTasks={setTasks} categories={categories}/>
      {console.log(tasks)}
    </div>
  );
}

export default App;
