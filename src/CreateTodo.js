import React, {useState} from 'react'

export default function CreatePost ({todos, setTodos}) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }
    function handleCreate () {     
        const newTodo = { title, description }
        setTodos([ newTodo, ...todos ])
    }

    return (
    <form onSubmit={evt => {evt.preventDefault(); handleCreate();}}>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        <br/>
        <textarea value={description} onChange={handleDescription}/>
            <input type="submit" value="Create" />
    </form>    
    )
}