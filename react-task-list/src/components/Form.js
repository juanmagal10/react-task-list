import React, {useState} from 'react';
import '../sylesheets/TaskForm.css' 
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

const [input, setInput] = useState('');


  const handleChange = e => {
    setInput(e.target.value);
  
  }

  const handleShipping = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  }

  return (
    <form action=""
      className='task-form'
      onSubmit={handleShipping}>
      <input
        type="text"
        className='task-input'
        placeholder='write your task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        Add Task
      </button>
 </form>
  )
}

export default Form
