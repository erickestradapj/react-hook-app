import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('Test in <MultipleCustomHooks/>', () => {
  test('should display the default component', () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();
  });
});
