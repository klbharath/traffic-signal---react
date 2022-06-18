import React, { useEffect, useState } from 'react';
import './App.css';
import Signal from './Signal';

const signals = [
  { signal: 'red', timeout: 5000, color: 'red' },
  { signal: 'orange', timeout: 3000, color: 'orange' },
  { signal: 'green', timeout: 1000, color: 'green' },
];

const App = () => {
  const [signal, setSignal] = useState(0);
  useEffect(() => {
    const signalInterval = setInterval(() => {
      let nextSignal = signal + 1;
      if (nextSignal === signals.length) {
        setSignal(0);
      } else {
        setSignal(nextSignal);
      }
    }, signals[signal].timeout);

    const clearSignalInterval = () => clearInterval(signalInterval);

    return () => {
      clearSignalInterval();
    };
  }, [signal]);
  return (
    <div className="App">
      <Signal signalColor={signals[signal]?.color} />
    </div>
  );
};

export default App;
