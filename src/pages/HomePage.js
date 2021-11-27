import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import PostList from '../TodoList'
import TodoList from '../TodoList'


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ todos, getPosts ] = useResource(() => ({
        url: '/todo',
        method: 'get'
    }))
    useEffect(getPosts, [])
    useEffect(() => {
    if (todos && todos.data) {
            dispatch({ type: 'FETCH_POSTS', todos: todos.data.reverse() })
        }
    }, [todos])
    const { data, isLoading } = todos;
    return (
        <>
          {isLoading && 'Todos loading...'} <TodoList/>
        </>
    )
} 