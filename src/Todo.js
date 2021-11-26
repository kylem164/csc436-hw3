import React, {useContext, useEffect, useR} from 'react'
import { useResource } from 'react-request-hook'

import { ThemeContext, StateContext } from './Contexts'


export default function Todo ({ title, description, isComplete, completedOn, todoID }) {
    const {dispatch} = useContext(StateContext)
    const style = {
        fontSize: 11
    }
 
    const [deletedTodo, deleteTodo] = useResource((todoID) => ({
        url: `/todos/${todoID}`,
        method: "delete"
    })); 

    const [toggledTodo, toggleTodo] = useResource((todoID, complete) => ({
        url: `/todos/${todoID}`,
        method: "patch",
        data:{
            isComplete: complete,
            completedOn: Date.now()
        }
    }));

    useEffect(() => {
        if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
          dispatch({ type: "DELETE_TODO", todoID: todoID });
        }
      }, [deletedTodo]);

      useEffect(() => {
        if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) { 
          dispatch({
            type: "TOGGLE_TODO",
            isComplete: toggledTodo.data.isComplete,
            completedOn: toggledTodo.data.completedOn,
            todoID: todoID
          });
        }
      }, [toggledTodo]);

    return (
        <div>
            <b>{title}</b> - <i>{description}</i>
            <input type="checkbox" checked={isComplete} onChange={e => {toggleTodo(todoID, e.target.checked)}} />
            <br/>
            <button variant="link" onClick={(e) => {deleteTodo(todoID)}}>Delete Todo</button>
            {isComplete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
            <br/>
            <br/>
        </div>  
    )
}