import React from 'react';

export default React.createClass({

  render() {
    let task = this.props.task

    return (
      <div className="task-card">
        {task}
      </div>
    )
  }
})
