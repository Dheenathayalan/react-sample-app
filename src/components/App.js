import React, { Component } from 'react'
import TodoList from "../containers/TodoList"
import AddTodo from "../containers/AddTodo";
import PropTypes from 'prop-types';
import './App.css';
import '../containers/AddTodo.css';
import '../containers/TodoItems.css';
import { connect } from 'react-redux';
import { addTodo, fetchTodos, updateTodo, toggleTodo, deleteTodo } from '../actions/todoActions';

class App extends Component {

    componentWillMount() {
        this.props.fetchTodos(this.props.todos);
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.todo).length !== 0) {
            this.props.todos.push(nextProps.todo);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <strong className="Title">TODO</strong>
                </header>
                <AddTodo
                    createTask={this.createTask.bind(this)}
                />
                <TodoList
                    todo={this.props.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    createTask(task) {
        if (!task) { return; }
        this.props.addTodo({
            task,
            id: Date.now(),
            isCompleted: false
        });
    }

    toggleTask(taskId) {
        let todoItem = this.props.todos[taskId]
        todoItem.isCompleted = !todoItem.isCompleted;
        this.props.toggleTodo(todoItem);
    }

    editTask(taskId, task) {
        let todoItem = this.props.todos[taskId]
        todoItem.task = task;
        this.props.updateTodo(todoItem);
    }

    deleteTask(taskId) {
        this.props.todos.filter((obj, i) => {
            if (obj.id === this.props.todos[taskId].id) this.props.todos.splice(i, 1); return true;
        });
        this.props.deleteTodo(this.props.todos);
    }
}

App.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    todo: PropTypes.object,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    todo: state.todos.todo,
})

export default connect(mapStateToProps, { addTodo, fetchTodos, updateTodo, toggleTodo, deleteTodo })(App);