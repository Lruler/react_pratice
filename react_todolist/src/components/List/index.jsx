import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
    render() {
        const { todos, changeTodo, deleteTodo, editTodo, beNtodo } = this.props
        return (
            <div style={{ display: 'block' }} className="main">
                {todos.map((todo) => {
                    return <Item key={todo.id} {...todo} beNtodo={beNtodo} changeTodo={changeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
                })}
            </div>
        )
    }
}
