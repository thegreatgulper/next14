import { render, screen, renderHook, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import FetchHook from '../app/fetchHook/page';
import useFetchUsers from '../hooks/useFetchUsers';

describe('FetchHook Page', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  it('renders a heading', async () => {
    fetch.mockResponseOnce(JSON.stringify([{name: 'John', id: 666}]));
    await act(() => {
      render(<FetchHook />)
    });
    const heading = screen.getByRole('heading', { level: 2 });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('FetchHook');
  });

  // how to test ...Loading text before the fetch is resolved?
  it('renders users page', async () => {
    fetch.mockResponseOnce(JSON.stringify([{name: 'John', id: 777}]));
    await act(() => {
      render(<FetchHook />)
    });
    const userId = screen.getByTestId('all-users');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(userId).toBeInTheDocument();
  });
  it('catches error and returns error message', async () => {
    fetch.mockReject('fake error message');
    act(() => {
      render(<FetchHook />);
      
    });
    await waitFor(() => {
      const error = screen.getByTestId('error')
      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent('fake error message');
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    
    
  });

})