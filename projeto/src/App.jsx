import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import './App.css'

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
      if (task.id === taskId) return {...task, completed: !task.completed}

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

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <>
      <div className='container'>
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}  handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
      </div>
    </>
  )
}

export default App;