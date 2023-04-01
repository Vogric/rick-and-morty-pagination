import { act, renderHook } from '@testing-library/react-hooks';
import usePagination from './usePagination';

describe('usePagination', () => {
  it('should increment page number when nextPage is called', () => {
    const initialPage = 1;
    const totalPages = 10;

    const { result } = renderHook(() => usePagination(initialPage, totalPages));

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toEqual(2);
  });

  it('should not increment page number when nextPage is called and page is already at the last page', () => {
    const initialPage = 10;
    const totalPages = 10;

    const { result } = renderHook(() => usePagination(initialPage, totalPages));

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toEqual(10);
  });

  it('should decrement page number when previousPage is called', () => {
    const initialPage = 2;
    const totalPages = 10;

    const { result } = renderHook(() => usePagination(initialPage, totalPages));

    act(() => {
      result.current.previousPage();
    });

    expect(result.current.page).toEqual(1);
  });

  it('should not decrement page number when previousPage is called and page is already at the first page', () => {
    const initialPage = 1;
    const totalPages = 10;

    const { result } = renderHook(() => usePagination(initialPage, totalPages));

    act(() => {
      result.current.previousPage();
    });

    expect(result.current.page).toEqual(1);
  });
});
