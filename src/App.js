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
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArr = [...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)]
            return {
                todoData: newArr
            }
        })
        console.log(id)
    }


    addItem = (text) => {
        this.setState(({todoData}) => {
            const newItem = {
                label: text,
                important: false,
                id: this.maxId++
            }
            const newArray = [...todoData, newItem]
            return {
                todoData: newArray
            }
        })
    }

    onToggleImportant=(id)=>{
        console.log('toggle important')
    }

    onToggleDone=(id)=>{
        console.log('toggle done')
}

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone()}

                />
                <ItemAddForm addItem={this.addItem}/>
            </div>
        );
    }

}


export default App;
