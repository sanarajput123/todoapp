import React, { Component } from 'react';
import './App.css';
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: '',
      }));
    }
  };

  deleteTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new todo"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
