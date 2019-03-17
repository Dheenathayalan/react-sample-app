import React, { Component } from 'react'

class CreateTodo extends Component {
    render () {
        return (
            <div className="todoList">
              <div className="header">
                <form onSubmit={this.onSubmit.bind(this)}>
                  <input type="text" placeholder="Task" ref="taskMessage" autoFocus/>
                  <button>Add</button>
                </form>
             </div>
            </div>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}

export default CreateTodo