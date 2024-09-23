import { useState } from "react";
import NavBar from "./NavBar";
import { Card, Button } from "react-bootstrap";
import AddNewTask from "./AddNewTask";
import ViewCurrentTasks from "./ViewCurrentTasks";

interface Task {
  name: string;
  description: string;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);

  const handleShowAddTask = () => {
    setShowAddTask(!showAddTask);
    setEditingTaskIndex(null);
  };

  const handleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    console.log("Task added successfully");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    console.log("Task deleted successfully");
  };

  const startEditingTask = (index: number) => {
    setEditingTaskIndex(index);
  };

  const updateTask = (updatedTask: Task) => {
    if (editingTaskIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingTaskIndex ? updatedTask : task
      );
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      console.log("Task edited successfully");
    }
  };

  const currentTask =
    editingTaskIndex !== null ? tasks[editingTaskIndex] : null;

  return (
    <>
      <NavBar />
      <h1 className="text-center">Welcome to Our Task Management App!</h1>
      <h4 className="m-5 text-center">
        Got a lot of tasks but not a lot of time? Let us do the hard part for
        you!
      </h4>
      <h4 className="m-5 text-center">
        Manage all of your tasks here! Get all the success without having to
        deal with the stress!
      </h4>
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Body>
          <Card.Title>Add New Task</Card.Title>
          <Card.Text>Add a new task to your to-do list here.</Card.Text>
          <Button variant="primary" onClick={handleShowAddTask}>
            {showAddTask ? "Hide Add Task Form" : "Add New Task"}
          </Button>
        </Card.Body>
      </Card>
      {showAddTask && (
        <AddNewTask
          addTask={addTask}
          editingTaskIndex={editingTaskIndex}
          currentTask={currentTask} 
          updateTask={updateTask}
        />
      )}
      <Card style={{ width: "18rem" }} className="m-auto mt-3">
        <Card.Body>
          <Card.Title>View Current Tasks</Card.Title>
          <Card.Text>See what's currently on your task list here.</Card.Text>
          <Button variant="primary" onClick={handleShowTasks}>
            {showTasks ? "Hide Tasks" : "View Current Tasks"}
          </Button>
        </Card.Body>
      </Card>
      {showTasks && (
        <ViewCurrentTasks
          tasks={tasks}
          deleteTask={deleteTask}
          startEditingTask={startEditingTask}
        />
      )}
    </>
  );
};

export default HomePage;