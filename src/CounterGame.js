// CounterGame.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import Button from "./Button";
import Message from "./Message";
import WelcomeMessage from "./WelcomeMessage";
import ColorGame from "./ColorGame";
import WinMessage from "./WinMessage";
import "./styles.css";

const CounterGame = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    setCount(count + 1);

    const milestones = [25, 50, 75, 100];
    if (milestones.includes(count + 1)) {
      setMsg(`You have clicked ${count + 1} times!`);
    }

    if (count + 1 === 10) {
      setMsg(WinMessage);
    }
  };

  const onReset = () => {
    setCount(0);
    setMsg("");
  };

  const goToColorGame = () => {
    navigate("/ColorGame");
  };

  return (
    <div>
      <div>
       <p>
       Welcome
        </p> 
      </div>
      <div id="container">
      <h1>Couunter Game</h1>
      <p>Count to 10 using the count button below</p>
        <Counter count={count} />
        <div className="button-container">
          {count < 10 && <Button onClick={onClick} label="Count" />}
          {count === 10 && (
            <>
              <Button onClick={onReset} label="Start Over" />
              <Button onClick={goToColorGame} label="Next Game" />
            </>
          )}
          {count !== 10 && <Button onClick={onReset} label="Reset" />}
        </div>
      </div>
      <Message msg={msg} />
    </div>
  );
};

export default CounterGame;
