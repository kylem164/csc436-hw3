import React, {useImperativeHandle, useState} from 'react'
import { useContext } from 'react/cjs/react.development';
import { StateContext } from './Contexts';
import { useResource } from 'react-request-hook';
import { useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';



export default function Login({show, handleClose}) {

    const [username, setUsername] = useState('')
    const [password, setPassword ] = useState('')
    const {dispatch} = useContext(StateContext)
    const [loginFailed, setLoginFailed ] = useState(false)


    const [user, login] = useResource((username, password) => ({
        url: "auth/login",
        method: "POST",
        data: { username, password },
      }));

      useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
          if (user.error) {
            setLoginFailed(true);
            alert('failed')
          } else {
            setLoginFailed(false);
            console.log(user.data);
            dispatch({ type: "LOGIN", username, access_token: user.data.access_token});
          }
        }
      }, [user])


    function handleUsername (evt) {setUsername(evt.target.value)}
    function handlePassword (evt) {setPassword(evt.target.value) }


    return (
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={e => { e.preventDefault(); login(username, password); handleClose() }}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="login-username">Username:</Form.Label>
          <Form.Control type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
          <Form.Label htmlFor="login-password">Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={handlePassword} name="login-password" id="login-password" />
          {loginFailed && <Form.Text style={{ color: 'red' }}>Invalid username or password</Form.Text>}
          </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" disabled={username.length === 0} type="submit">Login</Button>
        </Modal.Footer>
    </Form>
    </Modal>
    )
}