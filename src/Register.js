import React, {useState, useContext} from 'react'
import { ThemeContext, StateContext } from './Contexts';


export default function Register() {
    const {state, dispatch} = useContext(StateContext)


    const [ formData, setFormData ] = useState({
        username: "",
        password: "", 
        passwordRepeat: ""
    })

    return (
    <form onSubmit={evt => {evt.preventDefault(); dispatch({type: "REGISTER", username: formData.username})}}> 
        <label htmlFor="register-username"> Username: </label>
            <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} name="register-username" id="register-username" />
            <label htmlFor="register-password">Password:</label>
            <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} name="register-password" id="register-password" />
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat: e.target.value})} name="register-password-repeat" id="register-password-repeat" />
            <input type="submit" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat} value="Register" />
                </form>
    )
}