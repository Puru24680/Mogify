import { useEffect, useState } from "react";

function readValue(key, initialValue) {
  if (typeof window === "undefined") {
    return typeof initialValue === "function" ? initialValue() : initialValue;
  }

  try {
    const item = window.localStorage.getItem(key);

    if (item === null) {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }

    return JSON.parse(item);
  } catch {
    return typeof initialValue === "function" ? initialValue() : initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readValue(key, initialValue));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const removeValue = () => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(key);
    setValue(typeof initialValue === "function" ? initialValue() : initialValue);
  };

  return [value, setValue, removeValue];
}
