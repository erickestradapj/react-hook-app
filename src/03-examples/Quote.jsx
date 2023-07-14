import PropTypes from 'prop-types';

export const Quote = ({ name, species }) => {
  return (
    <>
      <blockquote className='blockquote text-end'>
        <p className='mb-1'>{name}</p>
        <footer className='blockquote-footer'>{species}</footer>
      </blockquote>
    </>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
