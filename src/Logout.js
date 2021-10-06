import React, {useState} from 'react'

export default function Logout({user, setUser}) {
    return(
    <form onSubmit={evt => {evt.preventDefault(); setUser('')}}>
        Logged in as: <b>{user}</b>
        <input type="submit" value="Logout" />
        </form>
        )
    }