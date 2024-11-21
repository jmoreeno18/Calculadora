import { useState } from 'react';
import './styles/AppCalculadora.css';

export const AppCalculadora = () => {
    const [print, setPrint] = useState('')
    const [result1, setResult1] = useState('')
    const [operator, setOperator] = useState('')

    const handleClick = (value) => {        
        if(['+', '-', '×', '÷'].includes(value)){
            setResult1(print)
            setOperator(value)            
        }                   
        setPrint((prePrint) => prePrint + value)
    }

    const calculate = () => {
        const num1 = parseFloat(result1)
        const num2 = parseFloat(print.replace(result1 + operator, ""))
        let result = 0;

        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '×':
                result = num1 * num2;
                break;
            case '÷':
                result = (num2 !== 0) ? num1 / num2 : 'Error';
                break;
            default:
                result = 'Error'
        }
        setPrint(result.toString())
        setResult1('')
        setOperator('')
    }

    const reset = () => {
        setPrint('')
        setResult1('')
        setOperator('')
    }

    return (
        <>
            <div className="row">
                <input value={print} readOnly />
                <div>
                    <button onClick={() => handleClick('7')}><p>7</p></button>
                    <button onClick={() => handleClick('8')}><p>8</p></button>
                    <button onClick={() => handleClick('9')}><p>9</p></button>
                    <button onClick={() => handleClick('÷')}><p>÷</p></button>
                </div>
                <div>
                    <button onClick={() => handleClick('4')}><p>4</p></button>
                    <button onClick={() => handleClick('5')}><p>5</p></button>
                    <button onClick={() => handleClick('6')}><p>6</p></button>
                    <button onClick={() => handleClick('×')}><p>×</p></button>
                </div>
                <div>
                    <button onClick={() => handleClick('1')}><p>1</p></button>
                    <button onClick={() => handleClick('2')}><p>2</p></button>
                    <button onClick={() => handleClick('3')}><p>3</p></button>
                    <button onClick={() => handleClick('-')}><p>-</p></button>
                </div>
                <div>
                    <button onClick={() => handleClick('0')}><p>0</p></button>
                    <button onClick={() => handleClick('.')}><p>.</p></button>
                    <button onClick={() => calculate()}><p>=</p></button>
                    <button onClick={() => handleClick('+')}><p>+</p></button>
                </div>
                <button onClick={() => reset()}><p>C</p></button> 
            </div>
        </>
    );
};
