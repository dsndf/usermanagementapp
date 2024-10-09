export const createSession = (token) => {
  localStorage.setItem("authToken", token);
};
export const getSessionToken = () => {
  return localStorage.getItem("authToken");
};
export const clearSession = () => {
  localStorage.clear();
};
