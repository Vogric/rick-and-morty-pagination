import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home comp', () => {
  it('should show a spinner while loading', () => {
    render(<Home />);
    const spinners = screen.getAllByTestId('spinner');
    expect(spinners.length).toBeGreaterThanOrEqual(1);
  });
});
