import React, {useState} from 'react'
// import Challenge from "./Challenge";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

const App = () => {
    const [step, setStep] = useState(0)
    const [isOpen, setIsOpen] = useState(true)
    // const [test, setTest] = useState({name: " John"})

    const handlerNextStep = () => {
        if (step < 2) setStep(prevStep => prevStep + 1)
        // setTest({name: " Fred"})
    }
    const handlerPrevStep = () => {
        if (step > 0) setStep(prevStep => prevStep - 1)
    }

    const handlerToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <button onClick={handlerToggle} className="close">&times;</button>
            {isOpen &&
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 0 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 1 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>3</div>
                    </div>
                    <p className="message">{messages[step]}
                        {/*{test.name}*/}
                    </p>
                    <div className="buttons">
                        <button style={{backgroundColor: "#7950f1", color: "#fff"}}
                                onClick={handlerPrevStep}>Previous
                        </button>
                        <button style={{backgroundColor: "#7950f1", color: "#fff"}}
                                onClick={handlerNextStep}>Next
                        </button>
                    </div>
                </div>
            }
            {/*<Challenge/>*/}
        </>
    )
}

export default App
