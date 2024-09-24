import {useState} from "react";

type ResponseHook<T = unknown> = [
  T,
  (value: T) => void
]

export function useLocalStorage<S = unknown>(initialState: S, key: string): ResponseHook<S> {
  const [state, setState] = useState<S>(() => {
    const storedData = localStorage.getItem(key);
    if (!storedData) {
      return initialState;
    } else {
      return JSON.parse(storedData);
    }
  })

  const handleSetState = (value: S) => {
    setState(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [state, handleSetState]
}
