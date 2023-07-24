import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/08-useContext/MainApp';

describe('Test in <MainApp/>', () => {
  test('should display HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );

    screen.debug();
  });

  expect(screen.getByText('HomePage')).toBeTruthy();
});
