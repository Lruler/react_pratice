import React, { Component } from 'react'
import Input from './components/Input'
import List from './components/List'
import Filter from './components/Filter'
import './App.css'

export default class App extends Component {
    state = {
        todos: []
    }
    checkAllTodo = (completed) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, completed }
        })
        this.setState({ todos: newTodos })
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    changeTodo = (id, completed) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, completed }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }
    clearAllcomp = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => { return !todoObj.completed })
        this.setState({ todos: newTodos })
    }
    viewActive = () => {
        this.viewAll()
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.completed === true) {
                todoObj.flag = false
                return todoObj
            }
            else return todoObj

        })
        this.setState({ todos: newTodos })
    }
    viewComp = () => {
        const { todos } = this.state
        this.viewAll()
        const newTodos = todos.map((todoObj) => {
            if (todoObj.completed === false) {
                todoObj.flag = false
                return todoObj
            }
            else return todoObj

        })
        this.setState({ todos: newTodos })
    }
    viewAll = () => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            todoObj.flag = true
            return todoObj
        })
        this.setState({ todos: newTodos })
    }
    editTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (id === todoObj.id) {
                todoObj.editing = true
            }
            return todoObj
        })
        this.setState({ todos: newTodos })
    }
    beNtodo = (id, newValue) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                todoObj.content = newValue
                todoObj.editing = false
                return todoObj
            }

            else {
                todoObj.editing = false
                return todoObj
            }
        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className="todoapp">
                <Input addTodo={this.addTodo} checkAllTodo={this.checkAllTodo} todos={todos} />
                <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} editTodo={this.editTodo} beNtodo={this.beNtodo} />
                <Filter todos={todos} clearAllcomp={this.clearAllcomp} viewActive={this.viewActive} viewComp={this.viewComp} viewAll={this.viewAll} />
            </div>
        )
    }
}
