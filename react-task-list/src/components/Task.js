import React from 'react';
import '../sylesheets/task.css'
import { AiOutlineCloseCircle, IcAiOutlineCloseCircleonName } from "react-icons/ai";

function Task({id, text, completed, completeTask,deleteTask }) {
    return (
        <div className={completed ? 'task-container completed' :'task-container'}>
          <div className="task-text" onClick={() => completeTask(id)}>
              {text}
          </div>
        <div className="task-icon-container"
        onClick={() => deleteTask(id)}>
            <AiOutlineCloseCircle  className="task-icon"/>
          </div>
      
    </div>
  )
}

export default Task



