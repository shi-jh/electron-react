import React from 'react';
import Todo from './Todo';
import connpath from "./connpath.ico"

function TodoList({ filteredTodos, todos, setTodos}) {
  return (
    <>
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo 
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text} 
            key={todo.id} 
          />
        ))}
      </ul>
    </div>
    <div className="company">
    <img src={connpath} alt="logo" width= "36px" height="36px" />
    <p> Powered by Conn;Path </p>
    </div>
    </>
  )
}

export default TodoList;