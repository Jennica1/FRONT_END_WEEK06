import { useState } from 'react'
//renders an input box and a button for creating new tasks. 
//Decide where the shared state should live. This is where you would also want to define the functions for updating the app state, including:

//a function for toggling the complete status of a task
//a function for adding a new task
//a function for deleting a task


const data = [
  {
    id: 1,
    lastName: 'Doe'
  },
  {
    id: 2,
    lastName: 'Doe'

  },
]
function TaskForm() {

  const [name, setName] = useState('John Doe');
  const [tasks, setTasks] = useState(data);

  const [taskData, settaskData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const studentListUI = tasks.map((student, index) => <p key={index}>{student.lastName}, {student.age} years old</p>
  );

  const newListUI = tasks.map((student, index) => <p key={index}>{student.lastName}</p>
);


  function handleSubmit(e) {
    e.preventDefault();
    const formData = new formData(e.target); //e.target == form
    name == formData.get('name');

    setName(formData.get(name));
    console.log(name);
  }

  function handleChange(e) {
    setName(e.target.value);

  }

  function handleFirstName(e) {
    settaskData({ ...taskData, firstName: e.target.value })
  };

  function handleAddTask(e) {
    e.preventDefault();
    setTasks([...tasks, taskData]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleAddTask}>
      
        <input type='text' value={taskData.lastName}
          onChange={(e) => settaskData({ ...taskData, lastName: e.target.value })} />

        <button>Submit</button>
      </form>
      {newListUI}
      {studentListUI}
      
    </>
  )
}

export default TaskForm
