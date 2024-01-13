// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
useState

function App() {
  const [todos, setTodos] = useState([]);
  //write a fetch call to call todos from the backend

  useEffect(() => {
    setInterval(() => {
      fetch('https://sum-server.100xdevs.com/todos')
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos)
        })
    }, 5000);
  }, [])

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}
// eslint-disable-next-line react/prop-types
function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}
export default App;
