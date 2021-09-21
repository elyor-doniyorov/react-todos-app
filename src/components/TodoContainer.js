/* eslint-disable react/prefer-stateless-function, react/state-in-constructor,
react/destructuring-assignment, react/no-access-state-in-setstate, no-param-reassign */
import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

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

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    );
  }
}

export default TodoContainer;
/* eslint-enable  react/prefer-stateless-function, react/state-in-constructor,
react/destructuring-assignment, react/no-access-state-in-setstate, no-param-reassign */
