// components/TodoSection.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/TodoSection.module.css';

const TodoSection = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className={styles['todo-container']}>
      <h2 className={styles['todo-heading']}>Todo List</h2>
      <table className={styles['todo-table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoSection;
