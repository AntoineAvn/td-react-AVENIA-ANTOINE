import React from "react";

function TaskList({ todoList, setTodoList, filter }) {
  const toggleTodo = (todoId) => {
    const newTodos = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newTodos);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "A faire":
        return todoList.filter((todo) => !todo.completed);
      case "Terminé":
        return todoList.filter((todo) => todo.completed);
      case "Toutes":
      default:
        return todoList;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
            color: todo.completed ? "gray" : "white",
          }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
