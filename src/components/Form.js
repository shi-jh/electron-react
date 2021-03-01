import React from 'react'

function Form({setInputText, todos, setTodos, inputText, setStatus }) {
  const inputTextH = (e) =>{
      setInputText(e.target.value);  
  };
  const submitTodoH =(e) =>{
    e.preventDefault();    
    if( inputText.length === 0 ){  // Null Data prevent here !!!    
    } else { setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
    }setInputText("");  
  };
  const statusH =(e) =>{
    setStatus(e.target.value);
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextH } type="text" className="todo-input" />
      <button onClick={submitTodoH} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>  
      </button>      
      <div className="select">
        <select onChange={statusH} name="todos" className="filter-todo">
          <option value="all">모든 작업</option>
          <option value="completed">완료 작업</option>
          <option value="uncompleted">미 작업</option>
        </select>
      </div>      
    </form>
  )
}

export default Form
