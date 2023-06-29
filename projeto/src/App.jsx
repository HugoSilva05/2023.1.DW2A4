import React, { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4 as uuidv4} from 'uuid'

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) return {...task, completed: !task.completed}

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [...tasks, {
      title: tasktitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}  handleTaskClick={handleTaskClick}/>
      </div>
    </>
  )
}

export default App;