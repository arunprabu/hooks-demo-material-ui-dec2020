import React, { useRef, useReducer } from 'react';
import todoReducer from '../../reducers/todoReducer';

const Todo = () => {

  const todoInput = useRef(null);
  // useReducer() - returns an array with state and dispatch method
  const [ todoListState, dispatch ] = useReducer(todoReducer);

  console.log(todoListState);

  const addTodoHandler = () => {
    console.log(todoInput.current.value);
    // dispatch and action with the above data (payload)
    dispatch({type: 'ADD_TODO', data: todoInput.current.value });
  }

  let todoList= null;
  if(todoListState && todoListState.length> 0){
    todoList = todoListState.map( (todo) => {
      return (
        <li key={todo.id}>
          {todo.text} | {todo.completed? 'DONE': 'NOT COMPLETED'}
          <button type='button'>Delete Todo</button>
        </li>
      )
    });
  }
  

  return (
    <div>
      <h2>Todo | useRef and useReducer Hooks Demo </h2>
      <input type='text' ref={todoInput}/>
      <button type='button' onClick={ addTodoHandler }>Add Todo</button>

      { todoListState && todoListState.length > 0? 
        <ul>
         {todoList} 
        </ul>
        :
        <div>No Todo's found! You can add todos...</div>
      }
      
    </div>
  )
}

export default Todo
