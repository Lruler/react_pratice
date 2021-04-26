import React, { Component } from 'react'

export default class Item extends Component {
    handleCheck = (id) => {
        return (event) => {
            this.props.changeTodo(id, event.target.checked)
        }
    }
    handleDelete = (id) => {
        this.props.deleteTodo(id)
    }
    beEditing = (id) => {
        this.props.editTodo(id)
    }
    //Bug之 添加失去焦点事件后勾选Todo值会默认变成on
    handleEdit = (id) => {
        return (e) => {
            const { keyCode, target, type } = e
            if (type === 'keyup') {
                if (keyCode === 13)
                    this.props.beNtodo(id, target.value)
            }
            if (type === 'blur' && target.value !== 'on') {
                this.props.beNtodo(id, target.value)
            }
        }
    }
    // beEdit = () => {
    //     this.edit.current.className = 'editing' + this.edit.current.className}
    //     // if (keyCode === 13) {
    //     //     this.props.editTodo(id, target.value)
    //     // }
    // }
    // handleEdit = (id) => {
    //     return (e) => {
    //         const { keyCode, target } = e
    //         if (keyCode === 13) {
    //             this.edit.current.className = ''
    //             this.props.editTodo(id, target.value)
    //         }
    //     }
    // }```````````
    // bhandleEdit = (id) => {
    //     return (e) => {
    //         const { target } = e
    //         this.edit.current.className = ''
    //         this.props.editTodo(id, target.value)
    //     }
    // }
    // beNew = (e) => {
    //     const { keyCode, target } = e
    //     if (keyCode === 13) {
    //         return this.props.editTodo(target.value)
    //     }
    // }


    // return (e) => {
    //     const { keyCode, target } = e
    //     if (keyCode === 13) {
    //         console.log();
    //         this.edit.current.className = 'completed'
    //         this.props.editTodo(id, target.value)
    //     }
    // }
    render() {
        const { content, completed, id, flag, editing } = this.props
        return (
            // <ul onBlur={this.bhandleEdit(id)} onKeyUp={this.handleEdit(id)} className="todo-list" onDoubleClick={this.beEdit}>//
            <ul className="todo-list">
                <li onBlur={this.handleEdit(id)} onKeyUp={this.handleEdit(id)} className={editing ? 'editing' : completed ? 'completed' : ''} style={{ display: flag ? 'block' : 'none' }}>
                    <div onDoubleClick={() => this.beEditing(id)} className='view'>
                        <input className='toggle' type='checkbox' checked={completed} onChange={this.handleCheck(id)} />
                        <label>{content}</label>
                        <button onClick={() => this.handleDelete(id)} className='destroy'></button>
                    </div>
                    <input className='edit' />
                </li>
            </ul>
        )
    }
}
