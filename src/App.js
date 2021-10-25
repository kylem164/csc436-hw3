import React, {useState, useReducer, useEffect} from 'react'
import CreateTodo from "./CreateTodo";
import appReducer from './Reducers';
import UserBar from "./UserBar";
import TodoList from "./TodoList"

import { ThemeContext, StateContext } from './Contexts';



export default function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })
  const {user, todos} = state

  useEffect(() => {
    if (user) {
       document.title = `${user}’s Todo List` 
     } else {
       document.title = 'Todo List'
   }
  }, [user])


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
