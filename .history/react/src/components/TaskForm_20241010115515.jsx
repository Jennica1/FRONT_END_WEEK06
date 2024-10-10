import { useState } from 'react'
import './App.css'

//renders an input box and a button for creating new tasks. 
//Decide where the shared state should live. This is where you would also want to define the functions for updating the app state, including:

//a function for toggling the complete status of a task
//a function for adding a new task

//a function for deleting a task


const data = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 27
  },
]
function TaskForm() {

  const [name, setName] = useState('John Doe');
  const [students, setStudent] = useState(data);

  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const studentListUI = students.map((student, index) => <p key={index}>{student.firstName}, {student.lastName}, {student.age} years old</p>
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
    setStudentData({ ...studentData, firstName: e.target.value })
  };

  function handleAddStudent(e) {
    e.preventDefault();
    setStudent([...students, studentData]);
  }

  return (
    <>
      <h1>Student List</h1>
      <form onSubmit={handleAddStudent}>
        <input type='text' value={studentData.firstName} onChange={handleFirstName} />

        <input type='text' value={studentData.lastName}
          onChange={(e) => setStudentData({ ...studentData, lastName: e.target.value })} />
        <input type='number' value={studentData.age}
          onChange={(e) => setStudentData({ ...studentData, age: e.target.value })} />

        <button>Submit</button>
      </form>
      {studentListUI}
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          style={{ fontSize: '3em', padding: '1em' }}
        />
        <button>Update</button>
      </form>
      <h1>Hello, {name}</h1>
      <Tile />
    </>
  )
}

function random(n) {
  return Math.floor(Math.random() * n);
}

function Tile() {
  const [color, setColor] = useState('red');

  function handleClick() {
    const red = random(255);
    const green = random(255);
    const blue = random(255);

    const newColor = `rgb(${red} ${green} ${blue})`;
    setColor(newColor);
  }

  return <div className='tile' style={{ background: color }}
    onClick={handleClick} />;
}
export default App
