import React, { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [students, setStudents] = useState([{name:"Matt"}, {name:"Chicken"}])
  const [cohort, setCohort] = useState("bhatia")
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${cohort}/roster.json`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setStudents(data.students);
    })
  },[cohort])

  function handleInput(e){
    setInputValue(e.target.value.toLowerCase())
  }

  function handleSubmit(e){
    e.preventDefault();
    setCohort(inputValue)
  }

  return (
    <div className="App">
      {students.map(student => <p key={student.name}>{student.name}</p>)}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value = {inputValue}/>
        <input type="submit"/>
      </form>
    </div>
  )

}

export default App
