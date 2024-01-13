// import { useEffect } from 'react'
// import { useState } from 'react'
// // import axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);
//   //using fetch

//   useEffect(() => {
//     setInterval(() => {
//       fetch("https://sum-server.100xdevs.com/todos")
//         .then(async function (res) {
//           const json = await res.json();
//           setTodos(json.todos)
//         }, [])
//     }, 50000);
//   })


//   //using axios
//   // useEffect(() => {
//   //   axios.get("https://sum-server.100xdevs.com/todos")
//   //     .then(function (res) {
//   //       setTodos(res.json.todos)
//   //     }, [])
//   // })
//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}

//   </div>

// }
// // eslint - disable - next - line react / prop - types
// function Todo({ title, description }) {
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

// export default App
