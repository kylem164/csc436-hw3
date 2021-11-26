import React from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'
import { useContext } from 'react/cjs/react.development'
export default function TodoList () {
    const {state} = useContext(StateContext)
    const {todos} = state;
    return (
      <div>
      {todos.length > 0 && todos.map((t, i) => (
        <Todo
          {...t}
          title={t.title}
          description={t.description}
          key={"todo-" + i}
          todoID={t.id}
        />
      ))}
    </div>
  );
}