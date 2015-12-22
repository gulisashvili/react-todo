import React from 'react';
import Task from './Task'

export default React.createClass({
  getInitialState () {
    return {
      tasks: []
    }
  },

  handleKeyUp (event) {
    if (event.which === 13) {
      let inputField = this.refs.input
      let inputFieldVal = inputField.value

      this.addTask(inputFieldVal)

      inputField.value = ''
    }

  },

  addTask (newTask) {
    let tasks = this.state.tasks

    tasks.push(newTask)

    this.setState({tasks})
  },

  render() {
    return (
      <div className="tasks-section">
        <input type="text" ref="input" className="create-task-input"
          placeholder="What needs to be done?" onKeyUp={this.handleKeyUp}/>
        {
          this.state.tasks.map(function(task, index) {
            return <Task key={index} task={task} />
          })
        }
      </div>
    )
  }
})
