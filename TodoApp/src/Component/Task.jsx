import React, {useState} from 'react';
import '../Css/Task.css'
import { FcFullTrash } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import  "../Css/App.css"
import { FcOk } from "react-icons/fc";

function Task({todo, onRemoveTodo, onUpdateTodo})
{
  const [editable , setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);


  const updateTodo = () =>{
    const request = {
      id:todo.id,
      content: newTodo
    }
    setEditable(false)
    onUpdateTodo(request)
  }

const removeTodo = () =>{
  onRemoveTodo(todo.id)
}

  return(
    <div className="App">
      <div className="task-container">
        <div className="task">
          <p className="taskText">
            {
              editable ? <input value={newTodo} onChange={  (e)=> setNewTodo(e.target.value)}
                                type="text" style={{width : "100px" , margin: "5px 0px"}}   />:
                todo.content
            }
          </p>
        </div>
        <div className="buttonGroup">
          {


            editable ? <button className="editButton" onClick={updateTodo}><FcOk style={{fontSize: "30px"}}/></button> :
              <button className="editButton" onClick={(()=> setEditable(true))}><FcSupport style={{fontSize: "30px"}}/></button>
          }
          <button className="deleteButton"
          ><FcFullTrash onClick={removeTodo} style={{fontSize: "30px"}} /></button>
        </div>
      </div>
    </div>


  )
}


export default Task;
