import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export default class Input extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    Add = (e) => {
        const { keyCode, target } = e
        if (keyCode !== 13) return
        const todoObj = { id: nanoid(), content: target.value, completed: false, flag: true, editing: false }
        this.props.addTodo(todoObj)
        target.value = ''
    }
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    render() {
        const { todos } = this.props
        return (
            <div className='header'>
                <h1>todos</h1>
                <input onKeyUp={this.Add} className="new-todo" placeholder="What needs to be done?" autoFocus></input>
                <section style={{ display: todos.length ? 'block' : 'none' }} className='main'>
                    <input onClick={this.handleCheckAll} id='toggle-all' className='toggle-all' type='checkbox' />
                    <label htmlFor="toggle-all"></label>
                </section>
            </div>

        )
    }
}
