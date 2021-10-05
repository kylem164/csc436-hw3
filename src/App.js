import CreatePost from "./CreateTodo";
import Todo from "./Todo";
import UserBar from "./UserBar";
import TodoList from "./TodoList"

export default function App() {
  const todos = [
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
  return(
    <div>
        <UserBar/>
        <br/><hr/>
        <CreatePost/>
        <br/><hr/>
        <p>TODO LIST:</p>
        <TodoList todos={todos}/>
    </div>
  );
}
