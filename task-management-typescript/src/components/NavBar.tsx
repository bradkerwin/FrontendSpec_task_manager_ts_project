import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import { useAuth0 } from '@auth0/auth0-react'

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <Navbar className="bg-info">
            <Container>
                <Navbar.Brand href="/">
                Task Management</Navbar.Brand>
                <Navbar.Toggle />
                <Nav>
                    <Nav.Link as={NavLink} to="/addnewtask">Add New Task</Nav.Link>
                    <Nav.Link as={NavLink} to="/viewcurrenttasks">View Current Tasks</Nav.Link>
                    <Navbar.Collapse className="justify-content-end">
                        { isAuthenticated ? ( 
                        <>
                            <Navbar.Text className="mx-4">
                                Signed in as: <a href="/profile">{user?.name}</a>
                            </Navbar.Text>
                            <LogOutButton />
                        </>
                        ) : (
                        <>
                            <LogInButton />
                        </>

                    )}
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;