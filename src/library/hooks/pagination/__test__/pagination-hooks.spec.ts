import { act, renderHook } from '@testing-library/react-hooks';

import { usePagination } from '@/library/hooks/pagination';

describe(`Testing Pagination Hooks`, () => {
  it(`Testing Invoke Update Range`, () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.action.updateRange({ offset: 10, totalData: 100 });
    });

    expect(result.current.state.offset).toBe(10);
    expect(result.current.state.totalData).toBe(100);
  });

  it(`Property Load More Must Be False`, () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.action.updateRange({ offset: 10, totalData: 15 });
    });

    expect(result.current.state.offset).toBe(10);
    expect(result.current.state.totalData).toBe(15);
    expect(result.current.state.enableLoadMore).toBeTruthy();

    act(() => {
      result.current.action.updateRange({ offset: 20, totalData: 15 });
    });

    expect(result.current.state.offset).toBe(20);
    expect(result.current.state.totalData).toBe(15);
    expect(result.current.state.enableLoadMore).toBeFalsy();
  });
});
