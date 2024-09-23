import React from 'react'
import NavBar from './NavBar'
import { Card, Button } from 'react-bootstrap'
import AddNewTask from './AddNewTask'

const HomePage = () => {
  return (
    <>
        <NavBar />
        <h1 className='text-center'>Welcome to Our Task Management App!</h1>
        <h4 className='m-5 text-center'>Got a lot of tasks but not a lot of time? Let us do the hard part for you!</h4>
        <h4 className='m-5 text-center'>Manage all of your tasks here! Get all the success without having to deal with the stress!</h4>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Add New Task</Card.Title>
            <Card.Text>
            Add a new task to your to do list here.
            </Card.Text>
            <Button variant="primary">Add New Task</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>View Current Tasks</Card.Title>
            <Card.Text>
            See what's currently on your task list here.
            </Card.Text>
            <Button variant="primary" onClick={<AddNewTask />}>View Current Tasks</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default HomePage