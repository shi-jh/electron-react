import React, {useState, useEffect } from 'react';
import "./App.css";
import Form from './components/Form';
import TodoList from './components/TodoList';
import Clock from './components/Clock';
import XlsxD from './components/XlsxD';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterdTodos] = useState([]);
 
  useEffect(() =>{
    getLocalTodos();
  },[]);

  useEffect(() =>{
    const filterH = () => {
      switch(status){
        case 'completed':
          setFilterdTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted' :
          setFilterdTodos(todos.filter(todo => todo.completed === false))
          break;  
        default: 
          setFilterdTodos(todos)
          break;    
      }
    };
    filterH();
    saveLocalTodos();
  },[ todos, status]);

  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos));    
  }
  const getLocalTodos =()=>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));      
    } else {
      let toLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(toLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Today WorkList</h1>            
      </header>
    <Clock className="clock"/>    
    <XlsxD />
    <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText = {setInputText}
      setStatus={setStatus}  
    />
    <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>  
  );
}

export default App;
