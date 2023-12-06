// Message.js
import React from 'react';

const Message = ({ msg }) => {
  return (
    <div className="message">
      <span id="msg">{msg}</span>
    </div>
  );
};

export default Message;