import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/Appheader";
import SearchPanel from "./components/search-panel";
import Todolist from "./components/todo-list";




const App = () => {

  const TodoData = [
    {label: 'Drink Coffee',important: false, id: 1},
    {label: 'Make Awesome App',important: true, id: 2},
    {label: 'Have a lunch',important: false, id: 3},
        {label: 'Learn React',important: false, id: 4},
  ]
  
  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <Todolist todos={TodoData} />
  </div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
