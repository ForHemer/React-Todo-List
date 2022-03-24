import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => (
      {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }
    ));
  };

  delTodo = (id) => {
    this.setState((prevState) => (
      {
        todos: [
          ...prevState.todos.filter((todo) => todo.id !== id),
        ],
      }
    ));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState((prevState) => (
      {
        todos: [
          ...prevState.todos, newTodo,
        ],
      }
    ));
  };

  render() {
    const myState = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={myState.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
