import React, { useState } from 'react'
//renders an input box and a button for creating new tasks. 
//Decide where the shared state should live. This is where you would also want to define the functions for updating the app state, including:

//a function for toggling the complete status of a task
//a function for adding a new task
//a function for deleting a task


const data = [
  {
    id: 1,
    taskName: 'homework'
  },
  {
    id: 2,
    taskName: 'wash dishes'
  },
]
function TaskForm() {

  const [tasks, setTasks] = useState(data);
  const [taskData, settaskData] = useState({taskName: ''});

  function handleSubmit(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1 };
      setTasks([...tasks, newTask]);
      settaskData({ taskName: '' });
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

   const newListUI = tasks.map((task) => (
    <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input type="checkbox" />
      <p>{task.taskName}</p>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  ));

  

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleAddTask}>
        <input 
          type='text' 
          value={taskData.taskName}
          onChange={(e) => settaskData({ ...taskData, taskName: e.target.value })} />
        <button type='submit'>Submit</button>
      </form>

      <div>
      {newListUI}
      </div>
    </>
  )
}

export default TaskForm
