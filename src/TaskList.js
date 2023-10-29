import React, { useState } from 'react';
import styled from 'styled-components';

const TaskItem = styled.li`
  display: flex;
  flex-wrap: wrap; /* Allow content to wrap */
  align-items: center; /* Center items vertically */
  margin: 5px 9px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const EditButton = styled.button`
  background-color: #FF5733;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  margin: 5px; /* Add margin for spacing */
`;

const DeleteButton = styled.button`
  background-color: #FF5733;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px; /* Add margin for spacing */
`;

const TaskContent = styled.div`
  flex-grow: 1; /* Grow to take up remaining space */
  overflow: hidden; /* Hide overflow for long content */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Show ellipsis for overflowed text */
`;

function TaskList({ tasks, editTask, deleteTask }) {
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index, taskText) => {
    setEditText(taskText);
    setEditIndex(index);
  };

  const handleSave = (index) => {
    if (editText) {
      editTask(index, editText);
      setEditText('');
      setEditIndex(null);
    }
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index}>
          {index === editIndex ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <EditButton onClick={() => handleSave(index)}>Save</EditButton>
            </>
          ) : (
            <TaskContent>{task}</TaskContent>
          )}
          <EditButton onClick={() => handleEdit(index, task)}>
            {index === editIndex ? 'Cancel' : 'Edit'}
          </EditButton>
          <DeleteButton onClick={() => deleteTask(index)}>Delete</DeleteButton>
        </TaskItem>
      ))}
    </ul>
  );
}

export default TaskList;
