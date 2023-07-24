import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/08-useContext/HomePage';
import { UserContext } from '../../src/08-useContext/context/UserContext';

describe('Test in <HomePage/>', () => {
  const user = {
    id: 1,
    name: 'Erick',
  };

  test('should display component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should display component with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
