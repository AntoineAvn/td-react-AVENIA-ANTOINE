import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import TaskForm from "./Components/TaskForm/TaskForm";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("Toutes");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const resetTodoList = () => {
    setTodoList([]); // Vide la liste des tâches
    localStorage.removeItem("todoList"); // Supprime la liste du localStorage
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm todoList={todoList} setTodoList={setTodoList} />
      <button onClick={resetTodoList} style={{ marginTop: "20px" }}>
        Reset Todo List
      </button>
      <div>
        <button onClick={() => setFilter("Toutes")}>Toutes</button>
        <button onClick={() => setFilter("A faire")}>À faire</button>
        <button onClick={() => setFilter("Terminé")}>Terminé</button>
      </div>
      <TaskList todoList={todoList} setTodoList={setTodoList} filter={filter} />
    </div>
  );
}

export default App;
