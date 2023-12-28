import React from 'react'
import TodoItem from "../MyComponents/TodoItem";


const Todos = (props) => {
  let myStyle={
      minheight: "70vh",
      margine : "40px 0"

  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.lenght===0? "No Todos to display " :
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key ={todo.sno} onDelete={props.onDelete}/>
      })
        }
    </div>
  )
}

export default Todos
