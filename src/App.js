import React, {useState} from 'react'
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import UserBar from "./UserBar";
import TodoList from "./TodoList"


export default function App() {

  const [user , setUser] = useState('')


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

  const [ todos, setTodos ] = useState(initialTodos)

  return(
    <div>
        <UserBar user={user} setUser={setUser}/>
        <br/><hr/>
        {user && <CreateTodo todos={todos} setTodos={setTodos} />}
        <br/><hr/>
        <p>TODO LIST:</p>
        <TodoList todos={todos}/>
    </div>
  );
}
