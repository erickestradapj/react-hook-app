import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  );

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />

      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{data.name}</p>
          <footer className='blockquote-footer'>{data.species}</footer>
        </blockquote>
      )}

      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
