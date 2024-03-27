import React, { useState } from "react";

function TaskForm({ todoList, setTodoList }) {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    // Utilisez l'état local newTodo plutôt que de lire la valeur directement depuis l'input
    if (newTodo.trim() !== "") {
      const newTodoItem = { id: Date.now(), text: newTodo, completed: false };
      setTodoList([...todoList, newTodoItem]);
      // Réinitialisez l'état de newTodo pour effacer le champ input
      setNewTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TaskForm;
