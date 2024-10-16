import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => setNum1(Number(e.target.value));
  const handleNum2Change = (e) => setNum2(Number(e.target.value));

  const add = () => setResult(num1 + num2);
  const subtract = () => setResult(num1 - num2);
  const multiply = () => setResult(num1 * num2);
  const divide = () => setResult(num1 / num2);
  const power = () => setResult(Math.pow(num1, num2));
  const sqrt = () => setResult(Math.sqrt(num1));

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Калькулятор</h1>
      <input 
        type="number" 
        placeholder="Число 1" 
        onChange={handleNum1Change} 
      />
      <input 
        type="number" 
        placeholder="Число 2" 
        onChange={handleNum2Change} 
      />
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={power}>^</button>
        <button onClick={sqrt}>√</button>
      </div>
      
      {result !== null && (
        <h2>Результат: {result}</h2>
      )}
    </div>
  );
}

export default Calculator;