import React, {useState} from 'react';

const Challenge = () => {
    const [step, setStep] = useState(1);
    const [counter, setCounter] = useState(0);
    const handlerStepIncrease = () => {
        setStep((prevState) => prevState + 1)
    }
    const handlerStepDecrease = () => {
        setStep((prevState) => prevState - 1)
    }
    const handlerCounterIncrement = () => {
        setCounter(step + counter)
    }
    const handlerCounterDecrement = () => {
        setCounter(counter - step)
    }

    const BUTTON = {
        border: "none",
        cursor: "pointer",
        padding: "10px 15px",
        borderRadius: "100px",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "white",
        background: "#1591ee"
    }
    const date = new Date("june 25 2023");
    date.setDate(date.getDate() + counter)


    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0"}}>
                <button onClick={handlerStepIncrease} style={BUTTON}>+</button>
                {step}
                <button onClick={handlerStepDecrease} style={BUTTON}>-</button>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <button onClick={handlerCounterIncrement} style={BUTTON}>+</button>
                {counter}
                <button onClick={handlerCounterDecrement} style={BUTTON}>-</button>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0"}}>
                <span>{counter === 0 ? `Today is ` : counter > 0 ? `${counter} days from today is ` : `${Math.abs(counter)} days ago `}</span>
                <span style={{marginLeft: "4px"}}> {date.toLocaleDateString()}</span>
            </div>

        </>

    )
}

export default Challenge
