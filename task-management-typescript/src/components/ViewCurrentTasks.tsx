import { useState } from 'react'
import AddNewTask from './AddNewTask'
import { Button, Card, CardText, CardTitle } from 'react-bootstrap'

interface Task {
    name: string,
    description: string
}

const ViewCurrentTasks = () => {
    const [displayTask, setDisplayTask] = useState<Task | null>(null)

    const handleDisplayTask = () => {
        const displayTask: Task = {
            name: "Walk the dog",
            description: "Walk the dog around the neighborhood for 20 minutes."
        }
        setDisplayTask(displayTask)
    }

    const handleDeleteTask = () => {
        setDisplayTask(null)
    }

  return (
    <>
        <Card>
            <CardTitle>{displayTask?.name}</CardTitle>
            <CardText>{displayTask?.description}</CardText>
            <Button variant='danger' onClick={handleDeleteTask}>Delete Task</Button>
        </Card>
    </>
  )
}

export default ViewCurrentTasks