import React from 'react';

import Button from './Button';
import { useParams } from 'react-router-dom';

import "./TaskDetails.css"


const TaskDetails = () => {
  const params = useParams();
  return ( 
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptatum voluptas quibusdam maiores debitis ullam, iure alias repellendus distinctio tenetur repudiandae temporibus minus optio, nulla eum ratione doloribus voluptates! Molestias.</p>
      </div>
    </>
   );
}
 
export default TaskDetails;