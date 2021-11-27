import React, {useState, useReducer, useEffect} from 'react'
import CreateTodo from "./CreateTodo";
import appReducer from './Reducers';
import { useResource } from 'react-request-hook';
import TodoPage from './pages/TodoPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage'
import ProfilePage from './pages/ProfilePage'
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { Router, View } from 'react-navi';
import { mount, route } from 'navi';

import { ThemeContext, StateContext } from './Contexts';

export default function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todo',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
}, [todos])

const {user} = state;

const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/todo/create':route({ view: <CreateTodo /> }),
  '/todo/:id': route(req => {
      return { view: <TodoPage id={req.params.id} /> }
  }),"/users": route({ view: <UsersPage /> }),
  "/profile": route((req) => {
    return { view: <ProfilePage /> };
  }),
});

return (
  <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <Router routes={routes}>
          <Container>
              <HeaderBar/>
              <hr/>
              <View />
          </Container>
          </Router>
      </StateContext.Provider>
  </div>
)
}
