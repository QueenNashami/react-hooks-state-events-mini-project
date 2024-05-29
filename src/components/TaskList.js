import React from "react";
import Task from "./Task";

// TaskList component to render a list of Task components
export default function TaskList({tasks, deleteTask, click}) {
  // Map over the tasks array to create a Task component for each task
  const tasksList = tasks.map((task, id) =>
    <Task
      key={id}             // Unique key for each Task component
      task={task}          // Pass the task object as a prop
      text={task.text}     // Pass the task text as a prop
      category={task.category} // Pass the task category as a prop
      click={click}        // Pass the click handler function as a prop
    />
  );

  return (
    <div className="tasks">
      {/* Render the array of Task components */}
      {tasksList}
    </div>
  );
}
