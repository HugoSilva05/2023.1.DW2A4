import React, { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar",
      completed: false
    },
    {
      id: "2",
      title: "Jogar",
      completed: true
    },
  ])
  return (
    <>
      <div className='container'>
        <Tasks/>
      </div>
    </>
  )
}

export default App;