import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Test in useCounter', () => {
  test('should return the default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should generate the counter with value of 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    const { counter } = result.current;
    expect(counter).toBe(103);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    const { counter } = result.current;
    expect(counter).toBe(97);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, decrement, reset } = result.current;

    act(() => {
      increment();
      decrement();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
