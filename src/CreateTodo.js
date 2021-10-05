import React from 'react'
export default function CreatePost ({user}) {
    return (
    <form onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title" />
        <br/>
        <textarea />
            <input type="submit" value="Create" />
    </form>    
    )
}