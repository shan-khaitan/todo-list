import React, { useState } from 'react';

function App() {
   const[task, setTask]=useState('');
   const[tasks, setTasks]= useState([]);

   const handleAddTask = ()=> {
    if(task){
      setTasks([...tasks, task]);
      setTask('')
    }
   }
   return(
    <div style={{textAlign: 'center',marginTop: '50px'}}>
      <h1>To-do List</h1>
      <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
   );
}

export default App;
