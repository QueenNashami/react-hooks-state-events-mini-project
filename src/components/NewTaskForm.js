// Import the React library
import React from "react";

// Define a functional component called NewTaskForm
// The component takes two props: onTaskFormSubmit (a function) and categories (an array)
export default function NewTaskForm({onTaskFormSubmit, categories}) {
  // Filter the categories array to remove the "All" category
  // Map over the filtered array to create an array of <option> elements
  // Pass the category name as the value and display text for each option
  let newArr = categories.filter(cat => cat !== "All").map((cat, ind) => <option key={ind}>{cat}</option>);

  return (
    // Render a form element with the class "new-task-form"
    // Attach an event listener to the submit event
    // Prevent the default form submission behavior
    // Get the values of the input fields
    // Call the onTaskFormSubmit function with the new task details
    <form className="new-task-form" onSubmit={function (event) {
      event.preventDefault();
      let newTask = document.getElementsByName("text")[0].value;
      let taskCategory = document.getElementsByName("category")[0].value;
      onTaskFormSubmit({ "text": newTask, "category": taskCategory })
    }} autoComplete="off" >
      {/* Label and input field for the task details */}
      <label>
        Details
        <input type="text" name="text" />
      </label>

      {/* Label and dropdown for the task category */}
      <label>
        Category
        <select name="category" >{newArr}</select>
      </label>

      {/* Submit button */}
      <input type="submit" value="Add task" />
    </form>
  );
}