import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import styled from 'styled-components';
import './App.css'
const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <AppContainer className='card'>
      <Title>TODO List</Title>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </AppContainer>
  );
}

export default App;
