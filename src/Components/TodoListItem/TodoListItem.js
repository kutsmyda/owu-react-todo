import React from "react";
import './TodoListItem.css'
import {render} from "@testing-library/react";


class TodoListItem extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        const {label, onDeleted, onToggleImportant,onToggleDone,important,done} = this.props



        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }


        return (
            <span className={classNames}>
                <span className='todo-list-item-label'
                      onClick={onToggleDone}>
                    {label}
                </span>
                <button onClick={onToggleImportant} type='button'
                        className='btn btn-outline-success btn-sm float-right'>V</button>

                <button type='button'
                        onClick={onDeleted}
                        className='btn btn-outline-danger btn-sm float-right'>X</button>

            </span>

        );
    }

}


export default TodoListItem;