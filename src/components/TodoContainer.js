import React, { Component } from 'react';
import { v4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    };
  }

  updateStorage = () => {
    const { todos } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
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
    this.updateStorage();
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
    this.updateStorage();
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
    this.updateStorage();
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
    this.updateStorage();
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
