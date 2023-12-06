// WelcomeMessage.js

import React from 'react';

const WelcomeMessage = () => {
  const msg = 'Hello, welcome to my App!'
  const instruction ='click the button below to get started.'
  // Your component logic here

  return (
    <div>
      <h1>{msg}</h1>
      <h3>{instruction}</h3>
    </div>
  );
};

export default WelcomeMessage;
