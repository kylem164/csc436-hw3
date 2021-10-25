import React from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'
import { useContext } from 'react/cjs/react.development'
export default function PostList () {
    const {state} = useContext(StateContext)
    const {todos} = state;
    return (
    <div>
       {todos.map((p, i) => <Todo {...p} title={p.title} description={p.description} key={'todo-' + i} todoID={i}/>)}
    </div> )}