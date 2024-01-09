// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { useState } from "react"

function App() {
  let counter = 4;
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Go to gym today"
  },
  {
    id: 2,
    title: "Go to gym",
    description: "Go to gym today"
  },
  {
    id: 3,
    title: "Go to gym",
    description: "Go to gym today"
  }]);
  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

export default App;
