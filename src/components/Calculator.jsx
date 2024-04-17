import React, {useState} from "react";

const Calculator = () => {
    const [display, setDisplay] = useState(0);

    const handleClearDisplay = () => {
        setDisplay(0);
    }
    return(
        <>
        <div id="wrapper">
            <div id="display-container">
                <div id="calculation-display">0</div>
                <div id='display'>{display}</div>
            </div>
            <div className="buttons-container">
            <div>
                <button id="clear" onClick={handleClearDisplay}>AC</button>
                <button id="divide">/</button>
                <button id="multiply">x</button>

            </div>
            <div>
                <button id="seven">7</button>
                <button id="eight">8</button>
                <button id="nine">9</button>
                <button id="subtract">-</button>

            </div>
            <div>
                <button id="four">4</button>
                <button id="five">5</button>
                <button id="six">6</button>
                <button id="add">+</button>

            </div>
            <div className="bottom-buttons">
                <button id="one">1</button>
                <button id="two">2</button>
                <button id="three">3</button>
                <button id="zero">0</button>
                <button id="decimal">.</button>
            </div>
            <div>
            <button id="equals">=</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Calculator;