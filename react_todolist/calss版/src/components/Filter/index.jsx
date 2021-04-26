import React, { Component } from 'react'

export default class Filter extends Component {
    active = React.createRef()
    all = React.createRef()
    completed = React.createRef()
    handleClearComp = () => {
        this.props.clearAllcomp()
    }
    handleAll = () => {
        this.all.current.className = 'selected'
        this.active.current.className = ''
        this.completed.current.className = ''
        this.props.viewAll()
    }
    handleActive = () => {
        this.all.current.className = ''
        this.active.current.className = 'selected'
        this.completed.current.className = ''
        this.props.viewActive()
    }
    handleComp = () => {
        this.all.current.className = ''
        this.active.current.className = ''
        this.completed.current.className = 'selected'
        this.props.viewComp()
    }
    render() {
        const { todos } = this.props
        const noCompleted = todos.reduce((pre, todo) => pre + (todo.completed ? 0 : 1), 0)
        return (
            <div className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
                <span className="todo-count"> {noCompleted} item left</span>
                <ul className="filters">
                    <li  >
                        <a ref={this.all} onClick={this.handleAll} href="#/" className="selected">All</a>
                    </li>
                    <li>
                        <a ref={this.active} onClick={this.handleActive} href="#/active">Active</a>
                    </li>
                    <li>
                        <a ref={this.completed} onClick={this.handleComp} href="#/completed">Completed</a>
                    </li>
                </ul>
                <button onClick={this.handleClearComp} className="clear-completed" style={{ display: todos.length ? 'block' : 'none' }}>Clear completed</button>
            </div>
        )
    }
}
