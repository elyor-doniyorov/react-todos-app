/* eslint-disable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types, react/jsx-key */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
/* eslint-enable react/destructuring-assignment, react/prefer-stateless-function,
react/prop-types, react/jsx-key */
