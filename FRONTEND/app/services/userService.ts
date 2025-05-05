import api from "./api";

export async function fetchUsers() {
  const response = await api.get("/users");
  return response.data;
}

export async function getUserById(id: string) {
  const response = await api.get(`/users/${id}`);
  return response.data;
}

export async function createUser(userData: { username: string; email: string; password: string }) {
  const response = await api.post("/users", userData);
  return response.data;
}

export async function updateUser(id: string, userData: { username?: string; email?: string; password?: string }) {
  const response = await api.patch(`/users/${id}`, userData);
  return response.data;
}

export async function deleteUser(id: string) {
  const response = await api.delete(`/users/${id}`);
  return response.data;
}