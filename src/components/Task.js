import React from "react";

// Task component to render a single task item
export default function Task({text, task, category, click}) {
  return (
    <div className="task">
      {/* Display the category of the task */}
      <div className="label">{category}</div>
      
      {/* Display the text of the task */}
      <div className="text">{text}</div>
      
      {/* Delete button with an onClick handler to trigger the click function passed as prop */}
      <button
        className="delete"
        onClick={() => click(task)}
      >
        X
      </button>
    </div>
  );
}
