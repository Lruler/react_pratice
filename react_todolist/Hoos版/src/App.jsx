import React, { useState, useEffect } from 'react';
import Input from './components/Input'
import List from './components/List'
import Filter from './components/Filter'
import './App.css'


export default function App() {
    //自定义浏览器缓存Hook
    // localStorage.clear()
    const useSemiPersistentState = (key, initialState) => {
        const initTodo = JSON.parse(initialState)
        const [value, setValue] = useState(
            JSON.parse(localStorage.getItem(key)) || initTodo
        );
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);
        return [value, setValue];
    };

    const [todos, setTodos] = useSemiPersistentState("todoList", JSON.stringify([]))
    //实现浏览器缓存机制
    function joinStorage(newTodos) {
        localStorage.setItem("todoList", JSON.stringify(newTodos));
        setTodos(newTodos)
    }
    //添加一个todo
    function addTodo(todoObj) {
        const newTodos = [todoObj, ...todos]
        joinStorage(newTodos)

    }
    //删除一个todo
    function deleteTodo(id) {
        const newTodos = todos.filter(todoObj => todoObj.id !== id)
        joinStorage(newTodos)
    }
    //完成一个todo
    function completeTodo(id, completed) {
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id)
                return { ...todoObj, completed }
            else
                return todoObj
        })
        joinStorage(newTodos)
    }
    //完成所有todo
    function completeAllTodos(completed) {
        const newTodos = todos.map(todoObj => {
            return { ...todoObj, completed }
        })
        joinStorage(newTodos)
    }
    //清除所有已完成的todo
    function clearAllComp() {
        const newTodos = todos.filter(todoObj => {
            return !todoObj.completed
        })
        joinStorage(newTodos)
    }
    //编辑一个todo
    function editTodo(id) {
        setTodos(todos.map(todoObj => {
            if (id === todoObj.id)
                todoObj.editing = true;
            return todoObj
        }))
    }
    function makeNewTodo(id, value) {
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) {
                todoObj.content = value
                todoObj.editing = false
                return todoObj
            }
            else return todoObj
        })
        joinStorage(newTodos)
    }
    //筛选Todos
    function seeAll() {
        const newTodos = todos.map(todoObj => {
            todoObj.flag = true;
            return todoObj
        })
        joinStorage(newTodos)
    }
    function seeActive() {
        seeAll()
        const newTodos = todos.map(todoObj => {
            if (todoObj.completed === true) {
                todoObj.flag = false
                return todoObj
            }
            else return todoObj
        })
        setTodos(newTodos)
    }
    function seeComp() {
        seeAll()
        const newTodos = todos.map((todoObj) => {
            if (todoObj.completed === false) {
                todoObj.flag = false
                return todoObj
            }
            else return todoObj
        })
        setTodos(newTodos)
    }
    return (
        <div>
            <div className="todoapp">
                <Input todos={todos} addTodo={addTodo} completeAllTodos={completeAllTodos} />
                <List todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} makeNewTodo={makeNewTodo} />
                <Filter todos={todos} clearAllComp={clearAllComp} seeAll={seeAll} seeActive={seeActive} seeComp={seeComp} />
            </div>
        </div>
    );
}



