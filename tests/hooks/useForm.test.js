import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Test in useForm', () => {
  const initialForm = {
    name: 'John Doe',
    email: 'john.doe@email.com',
  };

  test('should return the default values', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      form: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should change the name value', () => {
    const newValue = 'John Doe';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue,
        },
      });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.form.name).toBe(newValue);
  });

  test('should reset form', () => {
    const newValue = 'John Doe';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.form.name).toBe(initialForm.name);
  });
});
