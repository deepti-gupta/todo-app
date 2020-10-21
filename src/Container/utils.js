export const getStorageData = (key) => {
  return localStorage.getItem(key);
};
export const setStorageData = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const TODOLIST = "todolist";
