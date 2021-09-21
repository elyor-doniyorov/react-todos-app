/* eslint-disable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types */
import React from 'react';

function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

export default TodoItem;
/* eslint-enable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types */
