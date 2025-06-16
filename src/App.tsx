import React, { useState } from 'react';
import Counter from './components/Counter';

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  const handleValueChange = (value: number): void => {
    setCurrentValue(value);
    console.log('Counter value changed:', value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Counter App</h1>
      <Counter 
        initialValue={0} 
        min={-10}
        max={10}
        step={1}
        onValueChange={handleValueChange}
      />
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Current value: {currentValue}
      </p>
    </div>
  );
};

export default App;