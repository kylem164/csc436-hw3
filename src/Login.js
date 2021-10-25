import React, {useImperativeHandle, useState} from 'react'
import { useContext } from 'react/cjs/react.development';
import { StateContext } from './Contexts';
import { useResource } from 'react-request-hook';
import { useEffect } from 'react';


export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword ] = useState('')
    const {dispatch} = useContext(StateContext)
    const [loginFailed, setLoginFailed ] = useState(false)


    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                            setLoginFailed(false)
                            dispatch({ type: 'LOGIN', username: user.data[0].username })
            } else {
                            setLoginFailed(true)
            }
        } 
    }, [user])


    function handleUsername (evt) {setUsername(evt.target.value)}
    function handlePassword (evt) { setPassword(evt.target.value) }


    return (
        <form onSubmit={evt => {evt.preventDefault(); login(username, password); }}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value= {username} onChange={handleUsername} id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" value ={password} onChange={handlePassword}  name="login-password" id="login-password" />
            <input type="submit" value="Login" />
            {loginFailed && <span style={{color: "red"}}> Invalid username or password </span>}
            </form>
            )
        }