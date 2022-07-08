import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useDebouncedValue<T>(
  initialValue: T,
  delay: number = 500
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return [debouncedValue, setValue];
}
