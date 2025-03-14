import React from 'react';
import Task from './Task';

function TaskList({todos, onRemoveTodo,onUpdateTodo }) {

  return(
    <div style={{width:"100%", marginTop:"50px"}}>
      {
        todos && todos.map((todo) => (
          <Task key={todo.id} todo = {todo} onRemoveTodo = {onRemoveTodo} onUpdateTodo = {onUpdateTodo} />
            ))

      }

    </div>
  )
}

export default TaskList
