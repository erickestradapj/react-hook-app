import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, species }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [species]);

  return (
    <>
      <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
        <p ref={pRef} className='mb-1'>
          {name}
        </p>
        <footer className='blockquote-footer'>{species}</footer>
      </blockquote>

      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
