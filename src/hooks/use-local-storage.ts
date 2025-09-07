import { useState } from "react";

export const useLocalstorage = <T>(key: string, initialValue: T): [T, (newValue: T) => void] => {
  const [_value, _setValue] = useState(() => localStorage.getItem(key) || JSON.stringify(initialValue));
  
  const setValue = (newValue: T) => {
    _setValue(JSON.stringify(newValue));
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  const value = JSON.parse(_value) as T;
  
  return [value, setValue];
};
