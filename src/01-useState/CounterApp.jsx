import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  return (
    <>
      <div>CounterApp: {counter1}</div>
      <div>CounterApp: {counter2}</div>
      <div>CounterApp: {counter3}</div>
      <hr />
      <hr />
      <button
        className='btn btn-primary'
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
