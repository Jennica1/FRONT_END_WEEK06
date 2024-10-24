import React, { useState } from 'react';

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

  function handleAddTask(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1, completed: false };
      setTasks([...tasks, newTask]);
      settaskData({ taskName: '', completed: false });
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTaskCompletion(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const incompleteTasksCount = tasks.filter(task => !task.completed).length;

  const newListUI = tasks.map((task) => (
    <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '1em'}}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        disabled={task.completed} // Disable checkbox when task is completed
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.taskName}
      </p>
      <button className='btn-delete' onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  ));

  return (
    <>
      <h1>To Do List</h1>
      <h3>Tasks
