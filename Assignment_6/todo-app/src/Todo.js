import React from 'react';

const Todo = ({ todo, deleteTask }) => {
  return (
    <li>
      {todo.task}
      <button onClick={() => deleteTask(todo.id)}>Delete</button>
    </li>
  );
};

export default Todo;
