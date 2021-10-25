import React, {useState} from 'react'

export default function CreatePost ({dispatch}) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const dateCreated = Date(Date.now())
    var isComplete = false

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }


    return (
    <form onSubmit={evt => {evt.preventDefault(); dispatch({type: "CREATE", title, description, dateCreated, isComplete});}}>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        <br/>
        <textarea value={description} onChange={handleDescription}/>
            <input type="submit" value="Create" />
    </form>    
    )
}