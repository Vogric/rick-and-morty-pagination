import { renderHook } from '@testing-library/react-hooks';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import useFetchCharacter from './useFetchCharacter';
import axios from 'axios';
import { ROUTE } from '../../services/routes';

describe('useFetchCharacter', () => {
  it('fetches a character by ID', async () => {
    const id = 1;
    const mockCharacter = { id: 1, name: 'Rick Sanchez' };
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({
      data: mockCharacter,
    });

    const wrapper = ({ children }: MemoryRouterProps) => (
      <MemoryRouter initialEntries={[`/characters/${id}`]}>
        {children}
      </MemoryRouter>
    );

    const { result, waitForNextUpdate } = renderHook(
      () => useFetchCharacter('1'),
      {
        wrapper,
      }
    );

    expect(result.current).toBe(null);
    await waitForNextUpdate();
    expect(result.current).toEqual(mockCharacter);
    expect(axiosGetSpy).toHaveBeenCalledWith(
      `${ROUTE.BASE_URL}${ROUTE.CHARACTER}/${id}`
    );
  });
});
