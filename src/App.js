import logo from './logo.svg';
import './App.css';
import React from "react";
import AppHeader from "./Components/AppHeader/AppHeader";
import SearchPanel from "./Components/SearchPanel/SearchPanel";
import TodoList from "./Components/TodoList/TodoList";
import ItemStatusFilter from "./Components/ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "./Components/ItemAddForm/ItemAddForm";


class App extends React.Component {
    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }


    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArray = [...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)]
            return {
                todoData: newArray
            }
        })
        console.log(id)
    }


    addItem = (text) => {
        this.setState(({todoData}) => {
            const newItem = this.createTodoItem(text)
            const newArray = [...todoData, newItem]
            return {
                todoData: newArray
            }
        })
    }

//create function to fill in TOGGLES
    toggleProperty(arr,id,propName){
        const idx = arr.findIndex((el) => el.id === id)

        //update object
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}

        //construct new Array
        return [...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]

}


    onToggleImportant = (id) => {
        this.setState(({todoData})=> {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }


    onToggleDone = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData : this.toggleProperty(todoData,id,'done')
            }
        })

    }

    render() {
        const {todoData} = this.state
        const doneCount = todoData.filter((elem)=>elem.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={doneCount} done={todoCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}

                />
                <ItemAddForm addItem={this.addItem}/>
            </div>
        );
    }

}


export default App;
