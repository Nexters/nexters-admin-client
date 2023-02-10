import { useState } from 'react';

type Predicate<T> = (v: T) => boolean;

function useValidateState<T>(
  initalValue: T,
  validationFunctions: Array<Predicate<T>>,
) {
  const [value, setValue] = useState(initalValue);
  const [error, setError] = useState(false);
  const onChange = (value: T) => {
    setValue(value);
    setError(!validationFunctions.map((fn) => fn(value)).every(Boolean));
  };
  return { value, error, onChange } as const;
}

export { useValidateState };
