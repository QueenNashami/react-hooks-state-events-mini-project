import React from "react";

// CategoryFilter component to render a list of buttons based on categories passed as props
export default function CategoryFilter({categories, click}) {
  // Map over the categories array to create a button for each category
  const buttons = categories.map((category, ind) => {
    return (
      // Each button has a unique key, a className based on the category, and an onClick handler
      <button key={ind} className={category} onClick={() => click(category)} >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render the array of <button> elements for each category here */}
      {buttons}
    </div>
  );
}
