import React from 'react';
import AnalogClock from './AnalogClock';
import './App.css'; // Import the CSS file

function App() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="app">
      <h1 className="title">Welcome to My Clock App</h1>
      <div className="clock-container">
        <div className="digital-clock">
          <h2>Digital Clock</h2>
          <h3>{`${hours}:${minutes}:${seconds}`}</h3>
        </div>
        <AnalogClock time={time} />
      </div>
      <footer className="footer">
        <p>Designed with love using React and CSS</p>
      </footer>
    </div>
  );
}

export default App;
