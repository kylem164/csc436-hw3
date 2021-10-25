import React, {useState, useContext} from 'react'
import { StateContext } from './Contexts'

export default function CreatePost () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }


    return (
    <form onSubmit={evt => {evt.preventDefault(); dispatch({type: "CREATE", title, description});}}>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        <br/>
        <textarea value={description} onChange={handleDescription}/>
            <input type="submit" value="Create" />
    </form>    
    )
}