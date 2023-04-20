import React, { useState} from "react";
import "./App.css";

const App = () => {

const [todos, setTodos] = useState([
  { 
    id: 0, 
    contents: '리액트 기초를 공부해봅시다.', 
  },
  { 
    id: 1,  
    contents: '성공했다ㅜ.ㅜ', 
  },
])

const [contents, setContents] = useState('')

const contentsChangeHandler = (event) => {
  setContents(event.target.value)
}

const addButton = () => {
  const newTodo = {
    id: todos.length + 1,
    contents,
  }
  setTodos([...todos, newTodo])
}

  return (
    <>
    <div className="container">
    <input
          value={contents}
          onChange={contentsChangeHandler}
        ></input>
        <button onClick={addButton}>추가하기</button>
        <div className="font">Todo List</div>
    </div>
    
 
    <div className='app-style'>
      {
        todos.map((item) => {
          return <div key={item.id} className='square-style'>{item.contents}</div>
        })
      }
    </div>
    </>

  );
};

export default App;