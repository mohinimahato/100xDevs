import { useMemo } from 'react';
import { useState } from 'react'
// import axios from 'axios';

//useMemo
function App() {
    const [inputValue, setinputValue] = useState(1);
    const [counter, setCounter] = useState(0)

    let count = useMemo(() => {
        let sum = 0;
        for (let i = 1; i < inputValue; i++) {
            sum = sum + i
        }
        return sum
    }, [inputValue])

    return <div>
        <dir>
            <input onChange={function (e) {
                setinputValue(e.target.value)
            }} placeholder="Enter number" />
            <p>Sum from 1 to {inputValue} is {count}</p>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Sum of 0 to ({counter})</button>
        </dir>

    </div>

}

export default App
