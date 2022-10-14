import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '', id: uniqid() },
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
      task: { text: '', id: uniqid() },
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
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
