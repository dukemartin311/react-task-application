import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className={`task ${task.priority === "1" ? "reminder" : ""} `}>
      <h3>
        {task.name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
