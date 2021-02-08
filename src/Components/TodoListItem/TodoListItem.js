import React from "react";
import './TodoListItem.css'
import {render} from "@testing-library/react";


class TodoListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false,
            important: false
        }
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })


    }
    onMarkImportant = () => {
        this.setState((state) => {
            return {important: !state.important}
        })

    }

    render() {
        const {label, onDeleted, onToggleImportant,onToggleDone} = this.props

        const {done, important} = this.state

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
                      onClick={this.onLabelClick}>
                    {label}
                </span>
                <button onClick={onToggleImportant} type='button'
                        className='btn btn-outline-success btn-sm float-right'>V</button>

                <button type='button'
                        onClick={onToggleDone}
                        className='btn btn-outline-danger btn-sm float-right'>X</button>

            </span>

        );
    }

}


export default TodoListItem;