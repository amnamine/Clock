import React from 'react';
import './AnalogClock.css'; // Ensure this CSS file is created

const AnalogClock = ({ time }) => {
  const hours = time.getHours() % 12; // Convert to 12-hour format
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate the angles for each hand
  const hourAngle = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondAngle = (360 / 60) * seconds;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourAngle}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minuteAngle}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${secondAngle}deg)` }} />
      <div className="center-circle" />
    </div>
  );
};

export default AnalogClock;
