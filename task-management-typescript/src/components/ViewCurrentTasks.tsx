import { Card, Button } from "react-bootstrap";

interface Task {
  name: string;
  description: string;
}

interface ViewCurrentTasksProps {
  tasks: Task[];
  deleteTask: (index: number) => void;
  startEditingTask: (index: number) => void;
}

const ViewCurrentTasks = ({
  tasks,
  deleteTask,
  startEditingTask,
}: ViewCurrentTasksProps) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Card className="mb-3" key={index}>
            <Card.Body>
              <Card.Title>{task.name}</Card.Title>
              <Card.Text>{task.description}</Card.Text>
              <Button className="m-1" variant="outline-warning" onClick={() => startEditingTask(index)}>
                Edit
              </Button>
              <Button className="m-1" variant="outline-danger" onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No tasks to display</p>
      )}
    </>
  );
};

export default ViewCurrentTasks;