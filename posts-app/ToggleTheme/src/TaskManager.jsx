import { useEffect, useState } from "react";
import "./TaskManager.css";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-container">
      <h1>Task Manager</h1>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="task-filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")} >
          All
        </button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")} >
          Pending
        </button>
      </div>

      <ul className="task-list">
      {tasks.map(task => {
          let statusClass = task.completed ? "completed" : "pending";

          if (filter === "completed" && !task.completed) {
            statusClass += " completed"; 
          }
          if (filter === "pending" && task.completed) {
            statusClass += " faded"; 
          }
          return (
            <li key={task.id} className={statusClass}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <strong>{task.title}</strong> — {task.description}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
