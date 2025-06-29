import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(a + b);
        break;
      case 'subtract':
        setResult(a - b);
        break;
      case 'multiply':
        setResult(a * b);
        break;
      case 'divide':
        if (b === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url('https://www.aljazeera.com/wp-content/uploads/2021/05/2021-05-29T211724Z_127224441_UP1EH5T1N4ZMU_RTRMADP_3_SOCCER-CHAMPIONS-MCI-CHE-REPORT.jpg?resize=770%2C513&quality=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 57, 166, 0.85)', // Chelsea blue with opacity
        padding: 30,
        borderRadius: 16,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        width: 300,
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Chelsea Calculator</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          style={{ width: '100%', marginBottom: 10, padding: 10, borderRadius: 8, border: 'none' }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          style={{ width: '100%', marginBottom: 10, padding: 10, borderRadius: 8, border: 'none' }}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 10 }}>
          <button onClick={() => handleCalculate('add')} style={btnStyle}>Add</button>
          <button onClick={() => handleCalculate('subtract')} style={btnStyle}>Subtract</button>
          <button onClick={() => handleCalculate('multiply')} style={btnStyle}>Multiply</button>
          <button onClick={() => handleCalculate('divide')} style={btnStyle}>Divide</button>
        </div>
        <div style={{
          backgroundColor: 'white',
          color: '#0039a6',
          borderRadius: 8,
          padding: 10,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Result: {result !== null ? result : '—'}
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: '#f5f5f5',
  color: '#0039a6',
  border: 'none',
  borderRadius: 8,
  padding: '10px 12px',
  margin: '4px',
  cursor: 'pointer',
  flex: '1 1 45%'
};

export default Calculator;