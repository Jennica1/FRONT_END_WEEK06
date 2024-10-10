import { useState } from 'react'

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
    

    </>
  )
}


export default TaskForm
