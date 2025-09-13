import React, { useState } from "react";
import "./todo.css";

interface Todo {
  text: string;
  done: boolean;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), done: false }]);
      setInput("");
    }
  };

  const toggleDone = (idx: number) => {
    setTodos(todos.map((todo, i) => i === idx ? { ...todo, done: !todo.done } : todo));
  };

  return (
    <div className="todo-container">
      <h1>To Do Liste</h1>
      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Neue Aufgabe..."
          required
        />
        <button type="submit">Hinzufügen</button>
      </form>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li>Keine Aufgaben eingetragen.</li>
        ) : (
          todos.map((todo, idx) => (
            <li key={idx} className={todo.done ? "done" : ""} onClick={() => toggleDone(idx)}>
              {todo.text}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todo;
