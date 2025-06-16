import React, { useState, useEffect } from 'react';
import { CounterProps } from '../types';
import Button from './ui/Button';

const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  onValueChange,
}) => {
  const [count, setCount] = useState<number>(initialValue);

  useEffect(() => {
    // Notify parent component when count changes
    if (onValueChange) {
      onValueChange(count);
    }
  }, [count, onValueChange]);

  const increment = (): void => {
    setCount((prevCount) => {
      const newValue = prevCount + step;
      return newValue <= max ? newValue : prevCount;
    });
  };

  const decrement = (): void => {
    setCount((prevCount) => {
      const newValue = prevCount - step;
      return newValue >= min ? newValue : prevCount;
    });
  };

  const reset = (): void => {
    setCount(initialValue);
  };

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const counterDisplayStyles: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
  };

  const buttonGroupStyles: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  };

  return (
    <div style={containerStyles}>
      <h2>Counter</h2>
      <div style={counterDisplayStyles}>{count}</div>
      <div style={buttonGroupStyles}>
        <Button 
          onClick={decrement} 
          disabled={count <= min}
          variant="secondary"
        >
          -
        </Button>
        <Button 
          onClick={increment} 
          disabled={count >= max}
          variant="primary"
        >
          +
        </Button>
      </div>
      <Button 
        onClick={reset} 
        variant="danger"
        size="small"
      >
        Reset
      </Button>
    </div>
  );
};

export default Counter;