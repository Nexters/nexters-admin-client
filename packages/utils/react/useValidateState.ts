import { useState } from 'react';

type Predicate<T> = (v: T) => boolean;

/**
 * 검증이 필요한 상태를 사용할 때 사용하는 커스텀 훅
 *
 * @param initalValue - 상태의 초기값
 * @param validationFunctions - 상태 검증함수 배열
 * @returns 검증 상태 객체
 */
function useValidateState<T>(
  initalValue: T,
  validationFunctions: Array<Predicate<T>>,
) {
  const [value, setValue] = useState(initalValue);
  const [error, setError] = useState(false);
  const onChange = (value: T) => {
    setValue(value);
    validate(value);
  };
  const validate = (value: T) => {
    setError(!validationFunctions.map((fn) => fn(value)).every(Boolean));
  };
  return {
    isInital: value === initalValue,
    value,
    error,
    onChange,
    validate,
    setValue,
  } as const;
}

export { useValidateState };
