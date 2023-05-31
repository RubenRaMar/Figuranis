const useLocalStorage = () => {
  const setToken = (key: string, value: string) =>
    localStorage.setItem(key, value);

  return { setToken };
};

export default useLocalStorage;
