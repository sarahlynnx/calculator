import React, {useState} from "react";

const Calculator = () => {
    const [display, setDisplay] = useState(0);
    const [calculationDisplay, setCalculationDisplay] = useState('');

    const handleClearDisplay = () => {
        setDisplay('0');
        setCalculationDisplay('');
    }

    const handleNumberInput = (number) => {
        if (display === '0') {
            setDisplay(number);
        } else {
            setDisplay(display + number);
        }
    }


    return(
        <>
        <div id="wrapper">
            <div id="display-container">
                <div id="calculation-display">{calculationDisplay}</div>
                <div id='display'>{display}</div>
            </div>
            <div className="buttons-container">
                <div>
                    <button id="clear" onClick={handleClearDisplay}>AC</button>
                    <button className="operators" id="divide">/</button>
                    <button className="operators" id="multiply">x</button>
                </div>
                <div>
                    <button onClick={() => handleNumberInput('7')} id="seven">7</button>
                    <button onClick={() => handleNumberInput('8')} id="eight">8</button>
                    <button onClick={() => handleNumberInput('9')} id="nine">9</button>
                    <button className="operators" id="subtract">-</button>
                </div>
                <div>
                    <button onClick={() => handleNumberInput('4')} id="four">4</button>
                    <button onClick={() => handleNumberInput('5')} id="five">5</button>
                    <button onClick={() => handleNumberInput('6')} id="six">6</button>
                    <button className="operators" id="add">+</button>
                </div>
                <div className="bottom-buttons">
                    <button onClick={() => handleNumberInput('1')} id="one">1</button>
                    <button onClick={() => handleNumberInput('2')} id="two">2</button>
                    <button onClick={() => handleNumberInput('3')} id="three">3</button>
                    <button onClick={() => handleNumberInput('0')} id="zero">0</button>
                    <button onClick={() => handleNumberInput('.')} id="decimal">.</button>
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