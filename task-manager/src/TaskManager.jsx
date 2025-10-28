import { useEffect, useState } from "react";
import { Trash2, Plus, Clock, ChevronDown, ChevronRight } from "lucide-react";
import "./TaskManager.css";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all");
  const [dueTime, setDueTime] = useState("");
  const [openTaskId, setOpenTaskId] = useState(null);
  const STORAGE_KEY = "task_manager_data";
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setTasks(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to load tasks:", e);
    }
    setInitialized(true);
  }, []);
  
  useEffect(() => {
    if (initialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, initialized]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  // ⏰ Check and update task status based on due time
useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.completed) return task;

        if (task.dueTime && now >= new Date(task.dueTime).getTime()) {
          if (task.status !== "overdue") {
            notifyUser(task.title);
          }

          return { ...task, status: "overdue" };
        }

        return { ...task, status: "pending" };
      })
    );
  }, 60000);

  return () => clearInterval(interval);
}, []);
  

  const notifyUser = (taskTitle) => {
    if (Notification.permission === "granted") {
      new Notification("⏰ Task Overdue", {
        body: `Your task "${taskTitle}" is overdue!`,
        icon: "/bell.png",
      });
    }
  };  

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      subtasks: [],
      status: "pending",
      dueTime: dueTime ? new Date(dueTime).toISOString() : null,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setDueTime("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addSubtask = (taskId, subTitle) => {
    if (!subTitle.trim()) return;
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, subtasks: [...task.subtasks, { id: Date.now(), title: subTitle, completed: false }] }
        : task
    ));
  };

  const toggleSubtask = (taskId, subId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? {
            ...task,
            subtasks: task.subtasks.map(sub =>
              sub.id === subId ? { ...sub, completed: !sub.completed } : sub
            ),
          }
        : task
    ));
  };

  const deleteSubtask = (taskId, subId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, subtasks: task.subtasks.filter(sub => sub.id !== subId) }
        : task
    ));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="task-container">
      <h1>📋 Task Manager</h1>

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
        <input
          type="datetime-local"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
        />
        <button type="submit" className="add-btn">
          <Plus size={16} /> Add
        </button>
      </form>

      <div className="task-filters">
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`task-card ${ task.completed ? "completed" : task.status === "overdue" ? "overdue" : "" }`} >        
            <div className="task-header">
              <label className="task-title">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <strong>{task.title}</strong> — {task.description}
              </label>

              <div className="task-actions">
                {task.dueTime && (
                  <span className="due-time">
                    <Clock size={14} /> {new Date(task.dueTime).toLocaleString()}
                  </span>
                )}
                <button
                  className="toggle-subtasks"
                  onClick={() => setOpenTaskId(openTaskId === task.id ? null : task.id)}
                >
                  {openTaskId === task.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div
              className={`subtasks-container ${openTaskId === task.id ? "open" : ""}`}
              style={{
                maxHeight: openTaskId === task.id ? "500px" : "0",
                transition: "max-height 0.4s ease",
                overflow: "hidden",
              }}
            >
              <ul className="subtask-list">
                {task.subtasks.map((sub) => (
                  <li key={sub.id} className={sub.completed ? "completed" : ""}>
                    <label>
                      <input
                        type="checkbox"
                        checked={sub.completed}
                        onChange={() => toggleSubtask(task.id, sub.id)}
                      />
                      {sub.title}
                    </label>
                    <button
                      className="subtask-delete-btn"
                      onClick={() => deleteSubtask(task.id, sub.id)}
                    >
                      🗑 Delete
                    </button>
                  </li>
                ))}

                <li className="add-subtask">
                  <input
                    type="text"
                    placeholder="Enter subtask title..."
                    id={`subtask-input-${task.id}`}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById(`subtask-input-${task.id}`);
                      if (input.value.trim()) {
                        addSubtask(task.id, input.value);
                        input.value = "";
                      }
                    }}
                  >
                    ➕ Add Subtask
                  </button>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
