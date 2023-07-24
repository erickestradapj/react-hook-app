import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test in <MultipleCustomHooks/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should display the default component', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should display one quote', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
      },

      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Human')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should call increment function', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
      },

      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
