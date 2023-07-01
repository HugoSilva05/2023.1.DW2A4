import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('')
  
  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    if(!inputData) window.alert('Campo não pode estar vazio')
    else {
      handleTaskAddition(inputData)
      setInputData('')
    }
  }

  return (
    <div className='add-task-container'>
      <input type="text"  className='add-task-input' onChange={handleInputChange} value={inputData}/>
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}
 
export default AddTask;