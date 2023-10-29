import React, { useState } from 'react';
import styled from 'styled-components';

const TaskInput = styled.input`
  width: 70%;
  padding: 10px;
  margin: 5px 9px;
  border: 3px solid #000;
  border-radius: 5px
`;

const AddButton = styled.button`
  background-color: #FF5733;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <TaskInput
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <AddButton onClick={handleAddTask}>Add</AddButton>
    </div>
  );
}

export default AddTask;
