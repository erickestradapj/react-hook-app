import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/08-useContext/LoginPage';
import { UserContext } from '../../src/08-useContext/context/UserContext';

describe('Test in <LoginPage/>', () => {
  test('should display component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call setUser when button is clicked', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'John Doe',
      email: 'john.doe@email.com',
    });
  });
});
