import React, { Component } from 'react'

class TodoItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    setEditState(isEditing) {
        this.setState({
            isEditing
        });
    }

    toggleTask () {
        this.props.toggleTask(this.props.id);
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }

    editTask(e) {
        this.props.editTask(this.props.id, this.refs.task.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    renderTask() {
        const { task } = this.props;

        if (this.state.isEditing) {
            return (
               <td>
                  <div className="todoList">
                    <div className="header">
                      <form onSubmit={this.editTask.bind(this)}>
                        <input type="text" ref="task" defaultValue={task} autoFocus />
                      </form>
                    </div>
                  </div>
               </td>
            );
        }

        return (
            <td className="Item-name" onClick={this.toggleTask.bind(this)}>{task}</td>
        );
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button className="Action-btn" onClick={this.editTask.bind(this)}>Save</button>
                    <button className="Action-btn" onClick={this.setEditState.bind(this, false)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button className="Action-btn" onClick={this.setEditState.bind(this, true)}>Edit</button>
                <button className="Action-btn" onClick={this.deleteTask.bind(this)}>Delete</button>
            </td>
        );
    }

    render () {
        return (
            <tr>
                {this.renderTask()}
                {this.renderActionSection()}
            </tr>
        )
    }
}

export default TodoItems