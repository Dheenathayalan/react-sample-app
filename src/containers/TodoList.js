import React, { Component } from 'react'
import TodoItems from "../containers/TodoItems";

class TodoList extends Component {
    renderItems(status) {
        if (status === 'active') {
            return this.props.todo.map((c, index) => {
                if (!c.isCompleted) {
                    return (
                        <TodoItems
                            key={index}
                            {...c}
                            id={index}
                            toggleTask={this.props.toggleTask}
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask}
                        />
                    )
                }
            });
        } else if (status === 'completed') {
            return this.props.todo.map((c, index) => {
                if (c.isCompleted) {
                    return (
                        <TodoItems
                            key={index}
                            {...c}
                            id={index}
                            toggleTask={this.props.toggleTask}
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask}
                        />
                    )
                }
            });
        }
    }
    render() {
        return (
            <div>
                <div className="App-header">
                    <strong className="Title">ACTIVE</strong>
                </div>
                <table className="width-100">
                    <tbody>
                        {this.renderItems('active')}
                    </tbody>
                </table>
                <div className="App-header">
                    <strong className="Title">COMPLETED</strong>
                </div>
                <table className="width-100">
                    <tbody>
                        {this.renderItems('completed')}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList