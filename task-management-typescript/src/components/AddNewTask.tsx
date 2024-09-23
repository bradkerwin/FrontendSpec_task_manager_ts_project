import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

interface Task {
    name: string,
    description: string
}

const AddNewTask = () => {
    const [task, setNewTask] = useState(' ')

    const handleAddNewTask = () => {
        const newTask: Task = {
            name: "Walk the dog",
            description: "Walk the dog around the neighborhood for 20 minutes."
        }
        setNewTask(newTask)
    }

  return (
    <>
        <h1 className='text-center'>Add New Task</h1>
        <input type='text' placeholder='Task Name'>Enter Task Name</input>
        <input type='text' placeholder='Task Description'>Enter Task Description</input>
        <Button variant='success' onClick={handleAddNewTask}>Create New Task</Button>
    </>
  )
}

export default AddNewTask