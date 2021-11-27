import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'

import { Link } from 'react-navi'

import Todo from '../Todo'


export default function TodoPage ({ id }) {
    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${id}`,
        method: 'get'
    }))
    useEffect(getTodo, [id])
    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}