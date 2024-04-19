import React, {useState} from "react";

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [currentValue, setCurrentValue] = useState('');
    const [prevValue, setPrevValue] = useState('');
    const [calculationDisplay, setCalculationDisplay] = useState('');
    const [operator, setOperator] = useState('');

    const handleClearDisplay = () => {
        setCurrentValue('');
        setDisplay('0');
        setCalculationDisplay('');
        setPrevValue('');
        setOperator('');
    }

    const handleNumberInput = (number) => {
        if (number === '.') {
            if (currentValue.includes('.')) 
                return;
            if (currentValue === '') {
                setCurrentValue('0.');
                setDisplay('0.');
            } else {
                setCurrentValue(currentValue + '.');
                setDisplay(currentValue + '.');
            }
        }
        if (display === '0' || currentValue === '') {
            setCurrentValue(number.toString());
            setDisplay(number.toString());
        } else {
            setCurrentValue(currentValue + number.toString());
            setDisplay(currentValue + number.toString());
        }


        if (prevValue === '') {
            setCalculationDisplay(number.toString());
            setPrevValue(number.toString());
        } else {
            const lastChar = calculationDisplay.slice(-1);
            if (['+', '-', 'x', '/'].includes(lastChar) && currentValue === '-') {
                setCalculationDisplay(`${calculationDisplay}${number}`);
            } else if (['+', '-', 'x', '/'].includes(lastChar)) {
                setCalculationDisplay(`${calculationDisplay} ${number}`);
            } else {
                setCalculationDisplay(`${calculationDisplay}${number}`);
            }
        }
    }

    const handleOperators = (op) => {
        if (operator === '' && currentValue !== '') {
            setPrevValue(currentValue);
            setCurrentValue('');
            setOperator(op);
            setDisplay('0');
            setCalculationDisplay(calculationDisplay + ' ' + op);
        } else if (operator !== '' && currentValue === '') {
            if (op === '-' && !calculationDisplay.endsWith('-')) {
                setCurrentValue('-');
                setDisplay('-');
                setCalculationDisplay(calculationDisplay + ' -');   
            } else {
                setCalculationDisplay(calculationDisplay.slice(0, -1) + op);
            }
        } else if (currentValue === '-' && operator !== '') {
            let lastIndex = calculationDisplay.lastIndexOf(operator);
            let newCalculationDisplay = calculationDisplay.slice(0, lastIndex-1) + ' ' + op;
            setOperator(op);
            setCurrentValue('');
            setCalculationDisplay(newCalculationDisplay);
        } else {
            let result = calculate();
                setPrevValue(result);
                setOperator(op);
                setCalculationDisplay(calculationDisplay + ' ' + op);
                setCurrentValue('');
                setDisplay(result);
        }
    };
    

    const handleEqual = () => {
        if (prevValue && currentValue && operator) {
            const result = calculate();
            setPrevValue('');
            setCurrentValue(result);
            setDisplay(result);
            setOperator('');
            setCalculationDisplay(`${calculationDisplay} = ${result}`);
        }
    }

    const calculate = () => {
        const prev = parseFloat(prevValue);
        const current = parseFloat(currentValue);
        switch(operator) {
            case '-': 
               return String(prev - current);
            case '+': 
                return String(prev + current);
            case '/': 
                return String(prev / current);
            case 'x': 
                return String(prev * current);
            default: 
                return;
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
                    <button className="operators" id="divide" onClick={() => handleOperators('/')}>/</button>
                    <button className="operators" id="multiply" onClick={() => handleOperators('x')}>x</button>
                </div>
                <div>
                    <button onClick={() => handleNumberInput('7')} id="seven">7</button>
                    <button onClick={() => handleNumberInput('8')} id="eight">8</button>
                    <button onClick={() => handleNumberInput('9')} id="nine">9</button>
                    <button className="operators" id="subtract" onClick={() => handleOperators('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => handleNumberInput('4')} id="four">4</button>
                    <button onClick={() => handleNumberInput('5')} id="five">5</button>
                    <button onClick={() => handleNumberInput('6')} id="six">6</button>
                    <button className="operators" id="add" onClick={() => handleOperators('+')}>+</button>
                </div>
                <div className="bottom-buttons">
                    <button onClick={() => handleNumberInput('1')} id="one">1</button>
                    <button onClick={() => handleNumberInput('2')} id="two">2</button>
                    <button onClick={() => handleNumberInput('3')} id="three">3</button>
                    <button onClick={() => handleNumberInput('0')} id="zero">0</button>
                    <button onClick={() => handleNumberInput('.')} id="decimal">.</button>
                </div>
                <div>
                <button id="equals" onClick={handleEqual}>=</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Calculator;