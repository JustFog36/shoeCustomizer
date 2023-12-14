// ColorChanger.js
import React, { useState } from 'react';

const ShoeCustomizer = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{
      backgroundColor,
      minHeight: '100vh',
      width: '100%', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      margin: '0'
    }}>
      <h1>Color Changer</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <button onClick={() => handleColorChange('red')}>Red</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
        <button onClick={() => handleColorChange('gray')}>Gray</button>
      </div>
    </div>
  );
};

export default ShoeCustomizer;