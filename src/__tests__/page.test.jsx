import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Page from '../app/page'
// import { beforeEach, it } from 'node:test';
global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{name: 'John', id: 1}]),
      })
    );
describe('Page', () => {
  beforeEach(() => {
    // mock fetch and return json
    
    fetch.mockClear();
  })
  it('renders a heading', async () => {
    await act(() => {
      render(<Page />)
    });
    const heading = screen.getByRole('heading', { level: 2 });
    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Home');
  });

  it('renders users page', async () => {
    await act(() => {
      render(<Page />)
    });
    const userId = screen.getByTestId('all-users');
    expect(userId).toBeInTheDocument();
  })


})