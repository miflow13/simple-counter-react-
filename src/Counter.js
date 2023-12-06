const Counter = ({ count }) => {
  return (
    <div className="counter-display">
      <p>
        <span id="display">{count}</span>
      </p>
    </div>
  );
};

export default Counter;
