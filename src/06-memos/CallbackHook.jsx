import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement.jsx';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((prevState) => prevState + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
