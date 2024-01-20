
import { useCallback } from 'react'
import { memo, useState } from 'react'

function App() {

    const [counter, setCounter] = useState(0)
    const inputFunction = useCallback(() => {
        console.log("hi there")
    }, [])
    return <div>
        <div>
            <ButtonComponent inputFunction={inputFunction} />
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                Click me
            </button>
        </div>
    </div>

}
// eslint-disable-next-line react/display-name, react/prop-types
const ButtonComponent = memo(({ inputFunction }) => {
    console.log('Child render');
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default App
