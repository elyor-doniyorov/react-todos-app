/* eslint-disable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
/* eslint-enable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types */
