import React, {useContext} from 'react'

import { ThemeContext, StateContext } from './Contexts'


export default function Todo ({ title, description, isComplete, completedOn, todoID }) {
    const {dispatch} = useContext(StateContext)
    const style = {
        fontSize: 11
    }
    return (
        <div>
            <b>{title}</b> - <i>{description}</i>
            <input type="checkbox" onClick={e => {dispatch({type: 'TOGGLE', isComplete:!isComplete, todoID: todoID})}} />
            <br/>
            <button onClick={(e) => {dispatch({type: 'DELETE', todoID: todoID})}}>Delete Todo</button>
          {isComplete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
            <br/>
            <br/>
        </div>  
    )
}