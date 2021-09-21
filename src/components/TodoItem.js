/* eslint-disable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
/* eslint-enable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types */
