import React,{useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(50);
  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number / 2)}>/</button>
      <button onClick={() => setNumber(number * 2)}>*</button>
    </React.Fragment>
  );
}
export default Counter;
