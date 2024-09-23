import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

interface Task {
  name: string;
  description: string;
}

interface AddNewTaskProps {
  addTask: (task: Task) => void;
  editingTaskIndex: number | null;
  currentTask: Task | null;
  updateTask: (task: Task) => void;
}

const AddNewTask = ({
  addTask,
  editingTaskIndex,
  currentTask,
  updateTask,
}: AddNewTaskProps) => {
  const [task, setTask] = useState<Task>({ name: "", description: "" });

  useEffect(() => {
    if (currentTask) {
      setTask({
        name: currentTask.name,
        description: currentTask.description,
      });
    } else {
      setTask({ name: "", description: "" });
    }
  }, [currentTask]);

  const handleAddTask = () => {
    if (task.name && task.description) {
      if (editingTaskIndex !== null) {
        updateTask(task);
      } else {
        addTask(task);
      }
      setTask({ name: "", description: "" });
    }
  };

  return (
    <>
      <h1 className="text-center">
        {editingTaskIndex !== null ? "Edit Task" : "Add New Task"}
      </h1>
      <input className="m-2"
        type="text"
        placeholder="Task Name" required
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <br></br>
      <input className="m-2"
        type="text"
        placeholder="Task Description" required
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <Button className="ms-2" variant="success" onClick={handleAddTask}>
        {editingTaskIndex !== null ? "Update Task" : "Create New Task"}
      </Button>
    </>
  );
};

export default AddNewTask;