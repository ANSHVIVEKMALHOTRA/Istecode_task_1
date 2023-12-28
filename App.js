// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos   from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState , useEffect, useLayoutEffect} from 'react';
import { cleanup } from '@testing-library/react';

function App() {
  let initTodo;
if (localStorage.getItem("todos")===null){
  initTodo=[];
}
else{
  initTodo = JSON.parse(localStorage.getItem("todos"));
}
const onDelete=(todo)=>{
  console.log("I am ondelete of todo",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;  
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

const addTodo = (title , desc )=>{
  console.log (" i am adding this ", title , desc )
  // let sno = todos [todos.length-1] .sno + 1 ;
  const myTodo= {
   title : title ,
    desc : desc ,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
}

const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos)); 
}, [todos])

  return (<>
    <Header title = "My todo list" searchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}
export default App;
