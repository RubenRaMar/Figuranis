import { useCallback } from "react";

const useLocalStorage = () => {
  const setToken = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getToken = useCallback((key: string) => localStorage.getItem(key), []);

  const removeToken = (key: string) => localStorage.removeItem(key);

  return { setToken, getToken, removeToken };
};

export default useLocalStorage;
