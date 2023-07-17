import { LoadingQuote, Quote } from '../03-examples';
import { useCounter, useFetch } from '../hooks';

export const Layout = () => {
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
