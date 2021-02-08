import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({todos, onDeleted, onToggleImportant,onToggleDone}) => {


    const elements = todos.map((el) => {

        const {id, ...propsElem} = el
        return (<li key={id}
                    className='list-group-item'
        ><TodoListItem
            {...propsElem}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={()=>onToggleImportant(id)}
            onToggleDone={()=>onToggleDone(id)}
        /></li>)
    })


    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
}

export default TodoList;