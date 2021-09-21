/* eslint-disable react/prefer-stateless-function, react/state-in-constructor,
react/destructuring-assignment */
import React from 'react';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
/* eslint-enable  react/prefer-stateless-function, react/state-in-constructor,
react/destructuring-assignment */
