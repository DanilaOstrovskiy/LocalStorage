import React, {useState} from 'react';

function Counter() {

    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(value))
        localStorage.setItem("counterValue + 1", JSON.stringify(value + 1))
    }
    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalStorage = () => {
        localStorage.removeItem("counterValue + 1")
        setValue(0)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>removeItemFromLocalStorage</button>
        </div>
    )


}

export default Counter;
