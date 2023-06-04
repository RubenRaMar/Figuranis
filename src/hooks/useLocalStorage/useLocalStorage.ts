import { useCallback } from "react";

const useLocalStorage = () => {
  const setToken = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getToken = useCallback(
    () => localStorage.getItem("FIguRaniSTokeN"),
    []
  );

  const removeToken = (key: string) => localStorage.removeItem(key);

  return { setToken, getToken, removeToken };
};

export default useLocalStorage;
