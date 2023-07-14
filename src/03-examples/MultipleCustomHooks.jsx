import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  );

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote key={data.id} name={data.name} species={data.species} />
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
