import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';

import TableView from '../table-views'
import ListView from '../list-views';
import Controller from '../controllers';
import CreateTodoForm from '../create-todo-form'

class Todos extends React.Component {

    state = {
        todos: [
            {
                id: 12,
                text: 'Hello React Are You Good',
                time: new Date(),
                description: 'lorem ipsum app yu calfnf jdtha fjkafuasdfj',
                isSelect: false,
                isComplete: false,
            },
            {
                id: 13,
                text: 'Hello React Are You Good',
                time: new Date(),
                description: 'lorem ipsum app yu calfnf jdtha fjkafuasdfj',
                isSelect: false,
                isComplete: false,
            },
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter: 'all',
    }

    toggleSelect = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)

        todo.isSelect = !todo.isSelect
        this.setState({ todos })
    }

    toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)

        todo.isComplete = !todo.isComplete
        this.setState({ todos })
    }

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleSearch = (value) => {
        this.setState({
            searchTerm: value
        })
    }

    perFormSearch = () => {
        return this.state.todos.filter(todo => todo.text.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()));
    }

    createTodo = todo => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos];
        this.setState({ todos });
        this.toggleForm();
    }

    handleFilter = (filter) => {
        // this.setState({ filter })
    }

    performFilter = (todos) => {
        const {filter} = this.state
        if(filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if(filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }

    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({ todos})
    }

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({ todos })
    }

    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view: 'list',
            isOpenTodoForm: false
        })
    }

    getView = () => {
        let todos = this.perFormSearch();
        todos = this.performFilter(todos);
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect}
            />
        ) : (
            <TableView
                todos={todos}
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect}
            />
        );
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">React Todos</h1>
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                    view={this.state.view}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Todos;