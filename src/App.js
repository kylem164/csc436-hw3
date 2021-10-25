import React, {useState, useReducer, useEffect} from 'react'
import CreateTodo from "./CreateTodo";
import appReducer from './Reducers';
import UserBar from "./UserBar";
import TodoList from "./TodoList"
import { useResource } from 'react-request-hook';


import { ThemeContext, StateContext } from './Contexts';



export default function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
}, [todos])


const {user} = state;

  return(
    <div>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <UserBar />
          <br/><br/><hr/><br/> 
          {user && <CreateTodo /> }
          <TodoList />
        </StateContext.Provider>
    </div>
  );
}
