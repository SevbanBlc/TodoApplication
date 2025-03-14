import React, { useState} from 'react';
import "../Css/Tasker.css"
import "../Css/App.css"
import Task from "./Task.jsx";

function Tasker({onCreateTodo}) {

  const [newTodo, setNewTodo] = useState('');




  const createTodo = () => {

    if (!newTodo) return;

    const request ={
      id:Math.floor(Math.random()*999999999999),
      content : newTodo
    }
    onCreateTodo(request)


    setNewTodo("")
  }



  return(
    <div className="Tasker">

      <input type="text" placeholder="todo giriniz" value={newTodo}
             onChange={(e)=> setNewTodo(e.target.value)}/>
      <button onClick={createTodo} >Todo Create</button>
    </div>
  )
}

export default Tasker;
