import apiClient from "./apiClient";
import API_ENDPOINTS from "./endpoints";

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.getUsers);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createUser = async (userData: { name: string; email: string }) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.getUsers, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
