import { render } from "@testing-library/react";
import React, { useState } from "react";


function CategoryFilter({categories, setSelectCategorie, selectCategory}) {
  const[categButton, setCategButton] = useState(false)
  

  const renderButtons = categories.map((categ) => {
      const classCateg = categ === selectCategory ? "selected" : ""
      return <button 
        key={categ} 
        onClick={() => {
          setSelectCategorie(categ)
        }}
        className={classCateg}>{categ}</button>
    })
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
