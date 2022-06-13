import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setTxt] = useState("")
  const [category, setnewItemCateg] = useState("Code")


  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({ text, category })
    setTxt("")
    setnewItemCateg("Code")
    
  }


  const newCateg = categories.filter((category) => category !== "All")
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setTxt(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category">
          {newCateg.map((categ) => <option key={categ} onChange={(e) => setnewItemCateg(e.target.value)}>{categ}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
