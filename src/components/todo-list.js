import React from "react";
import TodoListItem from './todo-list-item';
import './todo-list.css';
const Todolist = ({todos}) => {
    const elements = todos.map((item)=>{
      // item =   {label: 'Drink Coffee',important: false},
      console.log(item.id)
        return (
        <li key={item.id} className="list-group-item">
          <TodoListItem { ... item } />
        </li>
        )  
  })

    //elements
    //  <li>Drink Coffee</li>
    // <li>Make Awesome App</li>
    // <li>Have a lunch</li>
    // <li>Learn React</li>

    return (
      <ul className="list-group todo-list">
        {/* <li><TodoListItem label ={todos[0].label}important={todos[0].important}/></li>
        <li><TodoListItem label ={todos[1].label}important={todos[1].important}/></li> */}
        {elements}
      </ul>
    );
  };

  export default Todolist;