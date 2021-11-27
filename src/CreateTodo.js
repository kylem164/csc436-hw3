import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'
import { useNavigation } from 'react-navi'


export default function CreatePost () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    const navigation = useNavigation(); 

    const [todo, createTodo] = useResource(({ title, description, author, isCompleted, completedOn }) => ({
        url: "/todo",
        method: "post",
        headers: { Authorization: `${state.user.access_token}` },
        data: { title, description, author, isCompleted, completedOn },
      }));

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }
     
    function handleCreate () {
        createTodo({ title, description, author: user.username, isCompleted: false, completedOn: undefined })
    }

    useEffect(() => {
        if (todo && todo.data) {
          dispatch({
            type: "CREATE_TODO",
            title: todo.data.title,
            description: todo.data.description,
            id: todo.data.id,
            author: user.username,
            isCompleted: false,
            completedOn: undefined
          });
          navigation.navigate('/todo/${todo.data.id}');
        }
      }, [todo]);

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