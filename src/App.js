import React, {useState, useReducer, useEffect} from 'react'
import CreateTodo from "./CreateTodo";
import appReducer from './Reducers';
import UserBar from "./UserBar";
import TodoList from "./TodoList"


export default function App() {

  const initialTodos = [
    {
      title: "Clean room",
      description: "vacuum, dust",
      dateCreated: "06-22-2021",
      complete: "",
      dateCompleted: ""

    },
    {
      title: "Finish hw",
      description: "web apps",
      dateCreated: "09-26-2021",
      complete: "true",
      dateCompleted: "09-28-2021"
    },
    {
      title: "Make dinner",
      description: "steak and potatoes",
      dateCreated: "09-27-2021",
      complete: "true",
      dateCompleted: "09-27-2021"
    }
  ]


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
        <UserBar user={user} dispatchUser={dispatch}/>
        <br/><hr/>
        {user && <CreateTodo dispatch={dispatch} />}
        <br/><hr/>
        <p>TODO LIST:</p>
        <TodoList todos={todos}/>
    </div>
  );
}
