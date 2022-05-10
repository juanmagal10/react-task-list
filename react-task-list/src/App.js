import React from 'react';
import './App.css';
import logo from './images/descarga.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-app">
      <div className="logo-container">
        <img
          src={logo}
          className='logo'
        />
      </div>
      <div className="task-list">
        <h1>My Tasks</h1>
        <TaskList />
        
      
      </div>
  </div>
  );
}

export default App;
