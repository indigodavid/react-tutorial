import React, { Component } from 'react';
import { v4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: v4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: v4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: v4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: v4(),
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo
            addTodoProps={this.addTodoItem}
          />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
