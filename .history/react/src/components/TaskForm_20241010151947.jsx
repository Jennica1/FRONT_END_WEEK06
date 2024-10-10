import React, { useState } from 'react';

const data = [
  {
    id: 1,
    taskName: 'homework'
  },
  {
    id: 2,
    taskName: 'wash dishes'
  },
];

function TaskForm() {
  const [tasks, setTasks] = useState(data);
  const [taskData, settaskData] = useState({ taskName: '' });

  // Function to handle adding a task
  function handleAddTask(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1 };
      setTasks([...tasks, newTask]);
      settaskData({ taskName: '' });
    }
  }

  // Function to handle deleting a task
  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // UI for each task with checkbox and delete button
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
          onChange={(e) => settaskData({ ...taskData, taskName: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        {newListUI}
      </div>
    </>
  );
}

export default TaskForm;
