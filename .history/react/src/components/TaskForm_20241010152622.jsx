import React, { useState } from 'react'
//renders an input box and a button for creating new tasks. 
//Decide where the shared state should live. This is where you would also want to define the functions for updating the app state, including:

//a function for toggling the complete status of a task
//a function for adding a new task
//a function for deleting a task


const data = [
  {
    id: 1,
    taskName: 'homework',
    completed: false
  },
  {
    id: 2,
    taskName: 'wash dishes',
    completed: false
  },
];

function TaskForm() {
  const [tasks, setTasks] = useState(data);
  const [taskData, settaskData] = useState({ taskName: '', completed: false });

  // Function to handle adding a task
  function handleAddTask(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1, completed: false };
      setTasks([...tasks, newTask]);
      settaskData({ taskName: '', completed: false });
    }
  }

  // Function to handle deleting a task
  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Function to toggle the task completion (checkbox)
  function toggleTaskCompletion(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }
  

  return (
    <>
      <h1>To Do List</h1>
     <form onSubmit={handleAddTask}>
        <input
          type='text'
          value={taskData.taskName}
          onChange={(e) => settaskData({ ...taskData, taskName: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>


      <div>
      {newListUI}
      </div>
    </>
  )
}

export default TaskForm
