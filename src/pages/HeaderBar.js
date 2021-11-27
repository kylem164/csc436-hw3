import React, { useContext } from 'react'

import CreatePost from '../CreateTodo'
import UserBar from '../UserBar'

import { Link } from 'react-navi'

import { Navbar, Nav, Container } from 'react-bootstrap'

import { ThemeContext, StateContext } from '../Contexts'

export default function HeaderBar ({setTheme }) {
    const theme = useContext(ThemeContext)
    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><Link href="/users">Users Page</Link></Nav.Link>
            <Nav.Link><Link href="/profile">Profile Page</Link></Nav.Link>
            {user.username && <Nav.Link><Link href="/todo/create">Create New Post</Link></Nav.Link>}
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}