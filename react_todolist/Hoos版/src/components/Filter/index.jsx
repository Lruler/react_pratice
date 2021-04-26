import React, { useState } from 'react';

export default function Filter(props) {
    const { todos } = props;
    const [selected, setSelected] = useState(0);
    function changeSelected(tabId) {
        return () => {
            switch (tabId) {
                case 0:
                    props.seeAll()
                    break;
                case 1:
                    props.seeActive()
                    break;
                case 2:
                    props.seeComp()
                    break;
                default: break;
            }
            setSelected(tabId)
        }
    }
    function handleClearComp() {
        props.clearAllComp()
    }
    const noCompleted = todos.reduce((pre, todo) => pre + (todo.completed ? 0 : 1), 0)
    return (
        <div className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
            <span className="todo-count">{noCompleted} item left</span>
            <ul className="filters">
                <li>
                    <a href="#/" onClick={changeSelected(0)} className={selected === 0 ? 'selected' : ''}>All</a>
                </li>
                <li>
                    <a href="#/active" onClick={changeSelected(1)} className={selected === 1 ? 'selected' : ''} >Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={changeSelected(2)} className={selected === 2 ? 'selected' : ''}>Completed</a>
                </li>
            </ul>
            <button onClick={handleClearComp} className="clear-completed" >Clear completed</button>
        </div>
    );
}