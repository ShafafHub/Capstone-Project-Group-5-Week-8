export function getAuthUser() {
  const savedUser = localStorage.getItem("authUser");
  return savedUser ? JSON.parse(savedUser) : null;
}

export function setAuthUser(user) {
  localStorage.setItem("authUser", JSON.stringify(user));
}

export function clearAuthUser() {
  localStorage.removeItem("authUser");
}

export function isAuthenticated() {
  return !!getAuthUser();
}