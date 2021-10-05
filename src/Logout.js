import React, {useState} from 'react'

export default function Logout({user}) {
    return(
    <form onSubmit={evt => evt.preventDefault()}>
        Logged in as: <b>{user}</b>
        <input type="submit" value="Logout" />
        </form>
        )
    }