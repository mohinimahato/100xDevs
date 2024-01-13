import { useEffect } from 'react'
import { useState } from 'react'
// import axios from 'axios';

function App() {

  return <div>

    <Todo id={btnId} />
  </div>

}

function Todo({ id }) {

  return <div>
    Id:{id}
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>
}

export default App
