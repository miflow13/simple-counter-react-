// WelcomeMessage.js

import React from 'react';

const WelcomeMessage = () => {
  const msg = 'Simple-Counter'
  const instruction ='click the count button to make the counter increase to 10'
  // Your component logic here

  return (
    <div>
      <h1>{msg}</h1>
      <h3>{instruction}</h3>
    </div>
  );
};

export default WelcomeMessage;
