/* eslint-disable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types, react/jsx-key */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
/* eslint-enable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types, react/jsx-key */
