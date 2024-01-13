import { useEffect } from 'react'
import { useState } from 'react'
// import axios from 'axios';

function App() {
    const [btnId, setBtnId] = useState(1);
    return <div>
        <button onClick={function () {
            setBtnId(1)
        }}>1</button>
        <button onClick={function () {
            setBtnId(2)
        }}>2</button>
        <button onClick={function () {
            setBtnId(3)
        }}>3</button>
        <button onClick={function () {
            setBtnId(4)
        }}>4</button>
        <Todo id={btnId} />
    </div>

}
// eslint - disable - next - line react / prop - types
// eslint-disable-next-line react/prop-types
function Todo({ id }) {
    const [todo, setTodo] = useState({});

    // implement effect here
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(async function (res) {
                const json = await res.json();
                setTodo(json.todo);
            })
    }, [id])
    return <div>
        Id:{id}
        <h1>{todo.title}</h1>
        <h5>{todo.description}</h5>
    </div>
}

export default App
