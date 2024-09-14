import React, { useState } from 'react';
const buttonStyle = {
  backgroundColor: '#61dafb',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  margin: '5px',
};
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button style={buttonStyle} onClick={handleAddTask}>Add Task</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((item, index) => (
          <li key={index}>
            {item} <button style={buttonStyle} onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;