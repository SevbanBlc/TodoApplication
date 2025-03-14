import './Css/App.css'
import Task from "./Component/Task.jsx"
import Tasker from "./Component/Tasker.jsx"
import TaskList from  "./Component/TaskList.jsx"
import {useState} from "react";

function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (newTodo)=>{
    setTodos([...todos,newTodo])
  }

  const removeTodo = (todoId) =>{
   setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const updateTodo = (newTodo) =>{
  const updatedTodo =  todos.map((todo)=>{
      if ( todo.id !== newTodo.id){
        return todo
      }
      return newTodo
    })

    setTodos([...updatedTodo])
  }

  console.log(todos)

  return (
    <div className="App">
      <div className="main">
      <Tasker onCreateTodo ={createTodo} />
        <TaskList todos={todos} onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo} />
      </div>
    </div>
  )
}

export default App
