import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("please add Name");
      return;
    }

    onAddTask({ name, description, priority });

    setName("");
    setDescription("");
    setPriority("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="texte"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="texte"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Priority</label>
        <input
          type="texte"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
