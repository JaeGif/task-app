import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }
  handleChange = (e) => {
    // uses setState to change the text to the value of the input
    this.setState({
      task: { text: e.target.value },
    });
  };
  onSubmitTask = (e) => {
    e.preventDefault();
    // we don't use the push method because that wouldl cause an error with altering the state directly.
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  };
  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter Task</label>
          <input
            type='text'
            id='task-input'
            onChange={this.handleChange}
            // we have to specify a value attribute
            value={task.text}
          ></input>
          <button type='submit'>Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;
