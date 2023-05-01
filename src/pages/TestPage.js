import React, { useState } from 'react';

const TestPage = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHideClick = () => {
    setIsHidden(true);
  };

  const handleShowClick = () => {
    setIsHidden(false);
  };

  return (
    <div>
      <p style={{ display: isHidden ? 'block' : 'none' }}>This is a Doctor</p>
      <div style={{ display: isHidden ? 'none' : 'block' }}>This is a Patient</div>
      <button id="hide" onClick={handleHideClick}>Doctor</button>
      <button id="show" onClick={handleShowClick}>Patient</button>
    </div>
  );
};

export default TestPage;